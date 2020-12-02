import { Schema, model, HookNextFunction } from "mongoose";
import { IUser } from "../types/user";
import bcrypt from "bcrypt";

const userSchema: Schema<any> = new Schema({
  firstName: {
    type: String,
    required: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre<IUser>(
  "save",
  async function (this: IUser, next: HookNextFunction): Promise<any> {
    const user: IUser = this;
    if (!user.isModified("password")) return next();

    const salt: string = await bcrypt.genSalt(10);
    const hash: string = await bcrypt.hash(user.password, salt);

    user.password = hash;
    next();
  }
);

export default model<IUser>("User", userSchema);
