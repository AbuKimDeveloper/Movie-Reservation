import mongoose from "mongoose";

const theaterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    totalScreens: {
      type: Number,
      required: true,
      min: [1, "Theater must have at least one screen"],
    },

    seatingCapacity: {
      type: Number,
      required: true,
    },

    seats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seat", // Reference to the Seat schema
      },
    ],

    theaterType: {
      type: String,
      enum: ["regular", "IMAX", "3D"],
      required: true,
    },

    facilities: {
      type: [String], // E.g., ["Wheelchair Accessible", "VIP Seats", "Parking Available"]
    },

    status: {
      type: String,
      enum: ["active", "closed"],
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

export default theaterSchema;
