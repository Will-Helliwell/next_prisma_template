import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const prisma = new PrismaClient();
    try {
      const articles = await prisma.article.findMany();
      res.status(200).json(articles);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching articles." });
    } finally {
      await prisma.$disconnect();
    }
  } else if (req.method === "POST") {
    res.status(200).json("create a new article");
  } else {
    res.status(405).end();
  }
}
