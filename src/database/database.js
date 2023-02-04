import moongose from "mongoose";
import { config } from "dotenv";
config();
moongose
  .connect(process.env.MONGO_DB)
  .then((db) => console.log("DB is conected"))
  .catch((error) => console.log(error));
