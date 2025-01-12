import mongoose from "mongoose";

const seatSchema = new mongoose.Schema(
  {
    seatNumber: {
      type: String, // E.g., "A1", "B2", etc.
      required: true,
    },

    seatType: {
      type: String,
      enum: ["regular", "VIP", "accessible"], // Different types of seats
      default: "regular",
    },

    status: {
      type: String,
      enum: ["available", "reserved", "booked", "occupied"], // Seat availability status
      default: "available",
    },

    row: {
      type: String, // E.g., "A", "B", etc.
      required: true,
    },

    column: {
      type: Number, // Seat position in the row (e.g., 1, 2, 3, etc.)
      required: true,
    },

    theaterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Theater", // Reference to the Theater schema
      required: true,
    },

    screeningId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Screening", // Reference to the Screening schema
    },
  },
  {
    timestamps: true,
  },
);

export default seatSchema;
