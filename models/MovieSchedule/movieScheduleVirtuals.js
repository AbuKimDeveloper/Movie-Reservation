import movieScheduleSchema from "./movieScheduleSchema.js";

movieScheduleSchema.virtual("nextScreeningDate").get(function () {
  const currentDate = new Date();
  let nextScreeningDate = new Date(this.startDate);

  // Handle recurring schedule
  if (this.recurrencePattern === "weekly") {
    while (nextScreeningDate <= currentDate) {
      nextScreeningDate.setDate(nextScreeningDate.getDate() + 7); // Move to next week
    }
  } else if (this.recurrencePattern === "monthly") {
    while (nextScreeningDate <= currentDate) {
      nextScreeningDate.setMonth(nextScreeningDate.getMonth() + 1); // Move to next month
    }
  }

  return nextScreeningDate;
});
