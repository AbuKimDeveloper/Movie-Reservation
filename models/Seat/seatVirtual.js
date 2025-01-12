import seatSchema from "./seatSchema";

seatSchema.virtual("label").get(function () {
  return `${this.seatNumber}`;
});
