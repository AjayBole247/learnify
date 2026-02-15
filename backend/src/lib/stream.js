import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STEAM_API_KEY;
const apiSecret = process.env.STEAM_SECRET_KEY;

if (!apiKey || !apiSecret) {
  console.error("❌ Stream API key or Secret is missing");
}

export const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("❌ Error upserting Stream user:", error.message);
    throw new Error("Failed to upsert Stream user");
  }
};

export const generateStreamToken = (userId) => {
  try {
    return streamClient.createToken(userId.toString());
  } catch (error) {
    console.error("❌ Error generating Stream token:", error.message);
    throw new Error("Failed to generate Stream token");
  }
};
