import ticketSchema from "./ticketSchema";

ticketSchema.pre("save", function (next) {
  if (this.status === "booked" && this.screeningId.status === "cancelled") {
    throw new Error("Cannot book a ticket for a cancelled movie schedule");
  }
  next();
});

ticketSchema.post("save", async function (doc) {
  // Mark seat as unavailable
  const seat = await mongoose.model("Seat").findById(doc.seatId);
  if (seat) {
    seat.isAvailable = false;
    await seat.save();
  }

  // Update movie schedule availableSeats
  const movieSchedule = await mongoose
    .model("Screening")
    .findById(doc.screeningId);
  if (movieSchedule) {
    movieSchedule.availableSeats -= 1;
    await movieSchedule.save();
  }
});
