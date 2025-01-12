import movieSchema from "./movieSchema.js";

movieSchema.virtual("durationInHours").get(function () {
  const hours = Math.floor(this.duration / 60);
  const minutes = this.duration % 60;
  return `${hours}h ${minutes}m`;
});

movieSchema.virtual("shortDescription").get(function () {
  return this.description.slice(0, 100) + "...";
});
