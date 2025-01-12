import movieSchema from "./movieSchema.js";

movieSchema.pre("save", function (next) {
  if (this.title.includes("offensive")) {
    throw new Error("Title contains inappropriate content");
  }
  next();
});
