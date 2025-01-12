import screeningSchema from "./screeningSchema";

screeningSchema.virtual("formattedScreeningTime").get(function () {
  return new Date(this.screeningDate).toLocaleString(); // Custom format for the time
});
