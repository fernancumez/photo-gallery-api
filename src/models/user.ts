import { Schema, model, HookNextFunction } from "mongoose";
import { IUser } from "../types/user";
import bcrypt from "bcrypt";

const userSchema: Schema<any> = new Schema({
  firstName: {
    type: String,
    required: true,
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

userSchema.methods.comparePassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

export default model<IUser>("User", userSchema);
