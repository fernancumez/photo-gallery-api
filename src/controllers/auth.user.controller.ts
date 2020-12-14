import { IUser } from "../types/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/user";

// Token creation
function createToken(user: IUser): string {
  const payload = { id: user.id, email: user.email };
  const options = { expiresIn: 86400 }; // 1 day

  return jwt.sign(payload, config.JWT_KEY, options);
}

export const authenticateUser = async (
  req: Request,
  res: Response
): Promise<Response<any> | undefined> => {
  try {
    const { email, password } = req.body as Pick<IUser, "email" | "password">;

    // Verify that the user is registered.
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "The user does not exist" });

    // Check if the password is correct
    const isMatch = await user.comparePassword(password);
    if (isMatch) return res.status(200).json({ token: createToken(user) });

    return res
      .status(400)
      .json({ message: "The email or password are incorrect" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};
