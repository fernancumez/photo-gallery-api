import { Secret } from "jsonwebtoken";

export interface IConfig {
  DATABASE: Idbconfig;
  PORT: string | number;
  NODE_ENV: string | undefined;
  JWT_KEY: Secret;
}

interface Idbconfig {
  URI: string | undefined;
  USER: string | undefined;
  PASSWORD: string | undefined;
}
