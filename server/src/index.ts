import dotenv from "dotenv";
import fastify from "fastify";
import fastifyCors from "@fastify/cors";

import { appRoutes } from "./routes/app.routes";

dotenv.config();

const PORT = process.env.PORT || 3000;
const BASE_URL = `http://localhost:${PORT}`;

const app = fastify();

app.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
});
app.register(appRoutes);

app.listen({
  port: Number(PORT),
  //host: "192.168.1.78"
}).then(() => console.log(`Server running: ${BASE_URL}`));