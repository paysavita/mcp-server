import { FastifyInstance } from "fastify";
import { fetchContacts } from "../services/activecampaign";
import { formatResource } from "../utils/formatter";

export default async function (app: FastifyInstance) {
  app.get("/mcp/contacts", async () => {
    const data = await fetchContacts();
    return formatResource("contacts", data);
  });
}