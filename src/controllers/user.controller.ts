import { IUser } from "../types/user";
import { Request, Response } from "express";
import User from "../models/user";

// Find User
export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const user: IUser | null = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
