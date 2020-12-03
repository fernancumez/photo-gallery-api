import { connect, ConnectionOptions } from "mongoose";
import config from "./config";

export const startConection = async (): Promise<void> => {
  // Option db connections
  const dbOptions: ConnectionOptions = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  // DB connection
  const { DATABASE } = config;

  await connect(DATABASE.URI, dbOptions);
  console.log("Database is connected!");
};
