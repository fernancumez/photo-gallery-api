const Config: IConfig = {
  DATABASE: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/photo-gallery",
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
  },
  PORT: process.env.PORT || 4000,
  NODE_ENV: process.env.NODE_ENV || "development",
};

interface IConfig {
  DATABASE: Idbconfig;
  PORT: string | number;
  NODE_ENV: string;
}

interface Idbconfig {
  URI: string;
  USER: string | undefined;
  PASSWORD: string | undefined;
}

export default Config;
