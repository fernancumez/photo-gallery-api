import { connect } from "mongoose";

export async function startConection() {
  // Option db connections
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // DB conection
  await connect("mongodb://localhost/photo-gallery", options);
  console.log("Database is connected!");
}
