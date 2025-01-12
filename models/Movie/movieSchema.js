import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
  },
  cast: {
    type: [String],
  },
  releaseDate: {
    type: Date,
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  trailerURL: {
    type: String,
  },
  status: {
    type: String,
    enum: ["upcoming", "now showing", "ended"],
    default: "upcoming",
  },
});

export default movieSchema;
