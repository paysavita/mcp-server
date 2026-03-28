import { FastifyInstance } from "fastify";
import { fetchAutomations } from "../services/activecampaign";
import { formatResource } from "../utils/formatter";

export default async function (app: FastifyInstance) {
  app.get("/mcp/automations", async () => {
    const data = await fetchAutomations();
    return formatResource("automations", data);
  });
}