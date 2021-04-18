import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
// import session from "express-session";
// import mongoSession from "connect-mongo";
import {addUser} from "../../../controller/data-utils"
let databaseURL = process.env.MONGODB_URI_LOCAL_LOGIN
if (process.env.NODE_ENV === "production") {
  databaseURL = process.env.MONGODB_URI_DEV
}


// const sessionParser = session({
//   secret:
//     "this_should_be_a_long_string_with_more_than_32_characters_also_known_as_keyboard_cat",
//   name: "sessionId",
//   resave: false,
//   saveUninitialized: true,
//   store: new mongoStore({
//     client: mongoClient,
//   }),
//   cookie: {
//     secure: process.env.NODE_ENV === "production",
//     expires: new Date(Date.now() + 3600000),
//   },
// });

const options = {
  site: process.env.SITE || 'http://localhost:3000',

  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  database: process.env.MONGODB_URI_LOCAL_LOGIN,
  // database: {
  //   type: "mongodb",
  //   uri: databaseURL,
  //   w: "majority",
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   retryWrites: true,
  // },
  debug: false,
  events: {
    signIn: async (message) => {
      const { name, email, image } = message.user;
      let result = await addUser(name, email, image)
    }
  },
  callbacks: {
    session: async (session, user) => {
      session.id = user.id;
      return Promise.resolve(session);
    },
    redirect: async (url, baseUrl) => {
      return Promise.resolve(url)
    }
  },
};

export default (req, res) => NextAuth(req, res, options);
