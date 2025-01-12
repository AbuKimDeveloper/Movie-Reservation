import movieSchema from "./movieSchema";

movieSchema.pre("save", function (next) {
  if (this.title.includes("offensive")) {
    throw new Error("Title contains inappropriate content");
  }
  next();
});
