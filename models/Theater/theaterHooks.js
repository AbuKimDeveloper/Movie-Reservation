import theaterSchema from "./theaterSchema.js";

theaterSchema.pre("save", async function (next) {
  if (this.totalSeats !== this.seats.length) {
    return next(
      new Error("Total seats count must match the number of linked seats."),
    );
  }
  next();
});

theaterSchema.post("save", async function (doc) {
  if (doc.seats.length === 0) {
    const seats = [];

    for (let i = 1; i <= doc.totalSeats; i++) {
      const newSeat = new mongoose.model("Seat")({
        seatNumber: i,
        theaterId: doc._id,
      });

      await newSeat.save();
      seats.push(newSeat._id);
    }

    doc.seats = seats;
    await doc.save();
  }
});
