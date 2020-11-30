import { Schema, model } from "mongoose";
import { IPhoto } from "../types/photo";

const photoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
});

export default model<IPhoto>("Photo", photoSchema);
