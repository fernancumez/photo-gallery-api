const Config = {
  DATABASE: {
    URI: process.env.MONGODB_URI || "mongodb://localhost/photo-gallery",
    USER: process.env.USER || "fernando",
    PASSWORD: process.env.PASSWORD || "fernando",
  },
  PORT: process.env.PORT || 4000,
  NODE_ENV: process.env.NODE_ENV || "development",
  JWT_KEY: process.env.JWT_KEY || "b8afrl7hkQeylazu",
};

export default Config;
