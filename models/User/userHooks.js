import userSchema from "./userSchema.js";
import bcrypt from "bcryptjs";

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.post("save", function (doc) {
  //send a welcome email
});
