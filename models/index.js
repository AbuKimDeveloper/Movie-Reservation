import mongoose from "mongoose";
import userSchema from "./User/userSchema.js";
import ticketSchema from "./Ticket/ticketSchema.js";
import theaterSchema from "./Theater/theaterSchema.js";
import seatSchema from "./Seat/seatSchema.js";
import screeningSchema from "./Screening/screeningSchema.js";
import movieScheduleSchema from "./MovieSchedule/movieScheduleSchema.js";
import movieSchema from "./Movie/movieSchema.js";

const userModel = mongoose.model("User", userSchema);
const ticketModel = mongoose.model("Ticket", ticketSchema);
const theaterModel = mongoose.model("Theater", theaterSchema);
const seatModel = mongoose.model("Seat", seatSchema);
const screeningModel = mongoose.model("Screening", screeningSchema);
const movieScheduleModel = mongoose.model(
  "Movie Schedule",
  movieScheduleSchema,
);
const movieModel = mongoose.model("Movie", movieSchema);

export {
  userModel,
  ticketModel,
  theaterModel,
  seatModel,
  screeningModel,
  movieScheduleModel,
};
