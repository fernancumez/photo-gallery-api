import { Request, Response } from "express";

export function helloworld(req: Request, res: Response): Response {
  return res.send("Hello world");
}
