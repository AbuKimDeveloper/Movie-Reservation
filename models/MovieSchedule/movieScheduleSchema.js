import mongoose from "mongoose";

const movieScheduleSchema = new mongoose.Schema(
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

    scheduleType: {
      type: String,
      enum: ["recurring", "one-time"],
      default: "recurring", // recurring movie schedule
    },

    recurrencePattern: {
      type: String, // Example: "weekly", "monthly", "daily"
      required: function () {
        return this.scheduleType === "recurring"; // Only required for recurring schedules
      },
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
    },

    screenings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Screening",
      },
    ],

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

export default movieScheduleSchema;
