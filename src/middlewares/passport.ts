import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import User from "../models/user";
import config from "../config";

// Initializations
const { JWT_KEY } = config;
const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_KEY,
};

export default new Strategy(opts, async (payload, done) => {
  try {
    const user = await User.findById(payload.id);
    if (user) return done(null, user);

    return done(null, false);
  } catch (err) {
    console.error(err);
  }
});
