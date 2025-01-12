import screeningSchema from "./screeningSchema";

screeningSchema.pre("save", function (next) {
  if (this.availableSeats < 0) {
    return next(new Error("Available seats cannot be negative"));
  }
  next();
});

screeningSchema.post("save", async function (doc) {
  const movieSchedule = await mongoose.model("MovieSchedule").findOne({
    movieId: doc.movieId,
    theaterId: doc.theaterId,
  });

  // Update status of the schedule if necessary
  if (doc.status === "completed") {
    // Mark schedule as completed when all screenings are completed
    const allCompleted = await mongoose.model("Screening").countDocuments({
      movieId: doc.movieId,
      theaterId: doc.theaterId,
      status: "completed",
    });

    if (allCompleted === movieSchedule.screenings.length) {
      movieSchedule.status = "completed";
      await movieSchedule.save();
    }
  }
});
