import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User schema
      required: true,
    },

    screeningId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Screening", // Reference to the Screening schema
      required: true,
    },

    seatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seat", // Reference to the Seat schema
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending", // Default is pending, assuming payment happens after booking
    },

    price: {
      type: Number,
      required: true, // The price of the ticket
    },

    bookingDate: {
      type: Date,
      default: Date.now, // Automatically set the booking date
    },

    status: {
      type: String,
      enum: ["booked", "cancelled"],
      default: "booked", // Can be cancelled if user cancels the ticket
    },

    qrCode: {
      type: String, // Optional: if you generate a QR code for tickets
    },

    ticketNumber: {
      type: String, // Optional: a unique ticket number
      unique: true, // Ensure the ticket number is unique
    },
  },
  {
    timestamps: true, // Add createdAt and updatedAt timestamps
  },
);

export default ticketSchema;
