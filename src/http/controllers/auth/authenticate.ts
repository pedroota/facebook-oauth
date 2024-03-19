import { FastifyReply, FastifyRequest } from "fastify";
import passport from "passport";
const FacebookStrategy = require("passport-facebook");

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    passport.use(
      new FacebookStrategy(
        {
          clientID: "458856213434205",
          clientSecret: "eb0de13db31231f514dsaddf036b335c9c532cb1",
          callbackURL: "/oauth2/redirect/facebook",
          state: true,
        },
        (accessToken: string, _: any, profile: any) => {
          console.log(accessToken, profile);
        }
      )
    );

    const teste = await passport.authenticate("facebook");
    console.log(teste());

    return reply.status(200).send();
  } catch (error) {
    console.error(error);
    return reply.status(500).send();
  }
}
