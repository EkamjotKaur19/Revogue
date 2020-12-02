import pwt from 'passport-jwt';
import dotenv from 'dotenv';

const {Strategy, ExtractJwt} = pwt;

dotenv.config();

// Load user model
import User from '../models/user.js'


const secretOrKey = process.env.SECRET_OR_KEY;
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;


export default (passport) => {
  passport.use(
    new Strategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};