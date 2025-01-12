import ticketSchema from "./ticketSchema.js";

ticketSchema.virtual("ticketStatus").get(function () {
  return this.status === "booked"
    ? "Booked"
    : this.status === "cancelled"
    ? "Cancelled"
    : "Pending";
});
