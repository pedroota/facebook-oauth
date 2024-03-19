import { FastifyInstance } from "fastify";
import { authenticate } from "./controllers/auth/authenticate";

export const appRoutes = async (app: FastifyInstance) => {
  app.post("/auth/facebook", authenticate);
};
