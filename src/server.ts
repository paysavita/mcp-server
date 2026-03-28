import Fastify from "fastify";
import dotenv from "dotenv";

import automations from "./routes/automations";
import contacts from "./routes/contacts";
import campaigns from "./routes/campaigns";
import emails from "./routes/emails";

dotenv.config();

const app = Fastify();

app.register(automations);
app.register(contacts);
app.register(campaigns);
app.register(emails);

app.get("/", async () => {
  return { status: "MCP server running" };
});

app.listen({ port: Number(process.env.PORT) || 3000 }, () => {
  console.log("Server running on port 3000");
});