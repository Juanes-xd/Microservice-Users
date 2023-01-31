import { config } from "dotenv";
config();

export default {
  SECRET: process.env.CLAVE,
};
