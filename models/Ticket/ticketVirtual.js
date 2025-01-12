import ticketSchema from "./ticketSchema";

ticketSchema.virtual("ticketStatus").get(function () {
  return this.status === "booked"
    ? "Booked"
    : this.status === "cancelled"
    ? "Cancelled"
    : "Pending";
});
