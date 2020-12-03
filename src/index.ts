import config from "./config";
import { config as dotEnvConfig } from "dotenv";
import app from "./app";

const { NODE_ENV } = config;
import { startConection } from "./database";

NODE_ENV !== "production" ? dotEnvConfig() : "";

const main = async (): Promise<void> => {
  try {
    startConection();

    await app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
  } catch (err) {
    console.error(err);
  }
};

main();
