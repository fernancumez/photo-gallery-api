export interface IConfig {
  DATABASE: Idbconfig;
  PORT: string | number;
  NODE_ENV: string | undefined;
  JWT_KEY: string | undefined;
}

interface Idbconfig {
  URI: string | undefined;
  USER: string | undefined;
  PASSWORD: string | undefined;
}
