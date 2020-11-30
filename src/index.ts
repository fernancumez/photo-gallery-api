import config from "./config";
const { NODE_ENV } = config;

NODE_ENV !== "production" ? require("dotenv").config() : "";

import app from "./app";
import { startConection } from "./database";

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
