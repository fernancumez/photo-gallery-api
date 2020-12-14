import app from "./app";
import { startConection } from "./database";

const main = async (): Promise<void> => {
  try {
    await startConection();

    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
  } catch (err) {
    console.error(err);
  }
};

main();
