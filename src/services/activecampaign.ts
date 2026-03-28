import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const client = axios.create({
  baseURL: process.env.AC_API_URL,
  headers: {
    "Api-Token": process.env.AC_API_KEY
  }
});

export const fetchAutomations = async () => {
  const res = await client.get("/automations");
  return res.data.automations;
};

export const fetchContacts = async () => {
  const res = await client.get("/contacts");
  return res.data.contacts;
};

export const fetchCampaigns = async () => {
  const res = await client.get("/campaigns");
  return res.data.campaigns;
};

export const fetchEmails = async () => {
  const res = await client.get("/messages");
  return res.data.messages;
};