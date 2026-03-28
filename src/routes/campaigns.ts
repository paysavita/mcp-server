import { FastifyInstance } from "fastify";
import { fetchCampaigns } from "../services/activecampaign";
import { formatResource } from "../utils/formatter";

export default async function (app: FastifyInstance) {
  app.get("/mcp/campaigns", async () => {
    const data = await fetchCampaigns();
    return formatResource("campaigns", data);
  });
}