import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { id, password } = req.body;

    const admin = await prisma.admin.findUnique({
      where: { id },
    });

    if (!admin) {
      return res.status(401).json({ error: "잘못된 인증 정보입니다." });
    }

    const isValid = await bcrypt.compare(password, admin.password);

    if (!isValid) {
      return res.status(401).json({ error: "잘못된 인증 정보입니다." });
    }

    return res.status(200).json({
      success: true,
      admin: {
        id: admin.id,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
}
