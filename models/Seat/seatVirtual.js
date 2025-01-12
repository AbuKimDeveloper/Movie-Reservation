import seatSchema from "./seatSchema.js";

seatSchema.virtual("label").get(function () {
  return `${this.seatNumber}`;
});
