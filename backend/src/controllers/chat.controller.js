import { generateStreamToken, upsertStreamUser } from "../lib/stream.js";

export async function getStreamToken(req, res) {
  try {
    const user = {
      id: req.user._id.toString(), // Ensure it's a string
      name: req.user.fullName,
      image: req.user.profilePic || undefined,
    };

    await upsertStreamUser(user);
    const token = generateStreamToken(user.id);

    res.status(200).json({ token });
  } catch (error) {
    console.log("❌ Error in getStreamToken controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
