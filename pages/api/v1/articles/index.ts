import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../services/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      const articles = await prisma.article.findMany();
      res.status(200).json(articles);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching articles." });
    }
  } else if (req.method === "POST") {
    res.status(200).json("create a new article");
  } else {
    res.status(405).end();
  }
}
