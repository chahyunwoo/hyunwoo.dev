import { supabase } from "@/service/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { message, color } = req.body;

    if (!message || !color || message.trim() === "") {
      return res.status(400).json({ error: "Message is required" });
    }

    const ipAddress =
      (req.headers["x-forwarded-for"] as string) ||
      req.socket.remoteAddress ||
      "";

    if (!ipAddress) {
      console.error("IP address could not be determined");
      return res
        .status(500)
        .json({ error: "IP address could not be determined" });
    }

    const { data, error } = await supabase
      .from("guestbook")
      .insert([{ message, color, ip_address: ipAddress }]);

    if (error) {
      console.error("Error inserting data: ", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    return res.status(200).json({ data });
  } catch (error: unknown) {
    console.error("Unhandled error: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
