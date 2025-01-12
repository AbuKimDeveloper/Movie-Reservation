import mongoose from "mongoose";

const screeningSchema = new mongoose.Schema(
  {
    movieId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
      required: true,
    },

    theaterId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Theater",
      required: true,
    },

    screeningDate: {
      type: Date,
      required: true,
    },

    availableSeats: {
      type: Number,
      required: true,
    },

    seats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seat",
      },
    ],

    ticketPrice: {
      type: mongoose.Types.ObjectId,
      ref: "Ticket",
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "completed", "cancelled"],
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

export default screeningSchema;
