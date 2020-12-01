import { Schema, model } from "mongoose";
import { IUser } from "../types/user";

const userSchema = new Schema({
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

export default model<IUser>("User", userSchema);
