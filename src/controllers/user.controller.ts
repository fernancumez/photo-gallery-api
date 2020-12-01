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

// List all users
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: IUser[] = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

// Create new User
export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { firstName, lastName, email, password } = req.body as Pick<
      IUser,
      "firstName" | "lastName" | "email" | "password"
    >;

    const newUser = { firstName, lastName, email, password };

    const user: IUser = new User(newUser);
    await user.save();

    res.status(200).json({ message: "User successfully saved " });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
