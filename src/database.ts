import { connect, ConnectionOptions } from "mongoose";
import config from "./config";

export async function startConection() {
  // Option db connections
  const dbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // DB connection
  const { DATABASE } = config;

  await connect(DATABASE.URI, dbOptions);
  console.log("Database is connected!");
}
