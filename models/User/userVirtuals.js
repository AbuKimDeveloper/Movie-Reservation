import userSchema from "./userSchema.js";

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
