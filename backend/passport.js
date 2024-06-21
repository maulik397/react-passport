const passport = require('passport');

require('dotenv').config();

const GOOGLE_CLIENT_ID =process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const GITHUB_CLIENT_ID =  process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET =  process.env.GITHUB_CLIENT_SECRET;

var GoogleStrategy = require('passport-google-oauth20').Strategy;

var GithubStrategy = require('passport-github2').Strategy;

const router = require("express").Router();
const session = require('express-session')

passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/github/callback"

  },
  function(accessToken, refreshToken, profile, done) {
   done(null,profile)
  }
));
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"

  },
  function(accessToken, refreshToken, profile, done) {
   done(null,profile)
  }
));


passport.serializeUser((user,done)=>{
    done(null,user)
})
passport.deserializeUser((user,done)=>{
    done(null,user)
})