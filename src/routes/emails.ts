import { FastifyInstance } from "fastify";
import { fetchEmails } from "../services/activecampaign";
import { formatResource } from "../utils/formatter";

export default async function (app: FastifyInstance) {
  app.get("/mcp/emails", async () => {
    const data = await fetchEmails();
    return formatResource("emails", data);
  });
}