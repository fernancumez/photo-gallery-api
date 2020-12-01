import { connect, ConnectionOptions } from "mongoose";
import config from "./config";

export const startConection = async () => {
  // Option db connections
  const dbOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  // DB connection
  const { DATABASE } = config;

  await connect(DATABASE.URI, dbOptions);
  console.log("Database is connected!");
};
