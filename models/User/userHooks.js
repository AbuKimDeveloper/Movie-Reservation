import userSchema from "./userSchema";
import bcrypt from "bcryptjs";

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.post("save", function (doc) {
  //send a welcome email
});
