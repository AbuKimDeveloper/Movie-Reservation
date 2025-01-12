import userSchema from "./userSchema";

userSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});
