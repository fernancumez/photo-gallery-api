import config from "./config";
import dotenv from "dotenv";
import app from "./app";

const { NODE_ENV } = config;
import { startConection } from "./database";

NODE_ENV !== "production" ? dotenv.config() : null;

const main = async () => {
  try {
    startConection();

    await app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
  } catch (err) {
    console.error(err);
  }
};

main();
