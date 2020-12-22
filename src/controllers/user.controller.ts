import { IUser } from "../types/user";
import { Request, Response } from "express";
import User from "../models/user";

// Find User
const getUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    // Sentence to search the user in the database
    const user: IUser | null = await User.findById(id);

    // If the resource does not exist
    if (!user) return res.status(404).json({ error: "User not found" });

    // If the user exist
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// List all users
const getUsers = async (req: Request, res: Response): Promise<Response> => {
  try {
    // Sentence to search all the users in the database

    const users: IUser[] = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Create new User
const createUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { firstName, lastName, email, password } = req.body as Pick<
      IUser,
      "firstName" | "lastName" | "email" | "password"
    >;

    const body = { firstName, lastName, email, password };

    // Verify in the db if the user exist
    const findUser = await User.findOne({ email });

    if (findUser)
      return res.status(400).json({ error: "The user already exists" });

    // If the user doesn´t exists, it will be created.
    const newUser: IUser = new User(body);
    await newUser.save();

    return res
      .status(201)
      .json({ message: "User successfully saved", user: newUser });
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Update user
const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id: _id } = req.params;

    const updateUser: IUser | null = await User.findByIdAndUpdate(
      { _id },
      req.body
    );

    // If the resource does not exisit
    if (!updateUser) return res.status(404).json({ error: "User not found" });

    // If the resource exist
    const userUpdated: IUser | null = await User.findById(_id);

    return res
      .status(200)
      .json({ message: "User successfully updated", user: userUpdated });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Delete User
const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;

    const userDeleted: IUser | null = await User.findByIdAndRemove(id);
    if (!userDeleted) return res.status(404).json({ error: "User not found" });

    return res
      .status(200)
      .json({ message: "User successfully deleted", user: userDeleted });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { getUser, getUsers, createUser, updateUser, deleteUser };
