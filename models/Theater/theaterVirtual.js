import theaterSchema from "./theaterSchema.js";

theaterSchema.virtual("availableSeats").get(async function () {
  const screenings = await mongoose
    .model("Screening")
    .find({ theaterId: this._id });
  let totalAvailableSeats = 0;

  screenings.forEach((screening) => {
    totalAvailableSeats += screening.availableSeats;
  });

  return totalAvailableSeats;
});
