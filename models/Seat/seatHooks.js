import seatSchema from "./seatSchema.js";

seatSchema.pre("save", function (next) {
  if (!this.isAvailable) {
    throw new Error("Seat is not available");
  }
  next();
});

seatSchema.post("save", async function (doc) {
  if (!doc.isAvailable) {
    const seat = await mongoose.model("Seat").findById(doc._id);
    if (seat) {
      seat.isAvailable = false;
      await seat.save();
    }
  }
});
