import movieScheduleSchema from "./movieScheduleSchema";

movieScheduleSchema.pre("save", function (next) {
  if (this.endDate && this.startDate > this.endDate) {
    return next(new Error("Start date must be before end date"));
  }
  next();
});

movieScheduleSchema.post("save", async function (doc) {
  const screenings = [];

  let nextScreeningDate = new Date(doc.startDate);
  const today = new Date();

  // Generate screenings based on recurrence pattern
  while (nextScreeningDate <= doc.endDate || !doc.endDate) {
    // Ensure screenings are not generated for past dates
    if (nextScreeningDate > today) {
      const screening = new mongoose.model("Screening")({
        movieId: doc.movieId,
        theaterId: doc.theaterId,
        screeningDate: nextScreeningDate,
        availableSeats: 100, // Example: 100 available seats
        status: "active",
      });

      await screening.save();
      screenings.push(screening._id);
    }

    // Update the date for the next screening based on recurrence pattern
    if (doc.recurrencePattern === "weekly") {
      nextScreeningDate.setDate(nextScreeningDate.getDate() + 7); // Move to next week
    } else if (doc.recurrencePattern === "monthly") {
      nextScreeningDate.setMonth(nextScreeningDate.getMonth() + 1); // Move to next month
    }
  }

  // Link screenings to the movie schedule
  doc.screenings = screenings;
  await doc.save();
});
