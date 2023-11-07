import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@project-root/services/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;

    case "POST":
      await handlePostRequest(req, res);
      break;

    default:
      res.status(405).json({ message: "InvalidMethod" });
      break;
  }
}

async function handleGetRequest(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    const articles = await prisma.article.findMany();
    res.status(200).json({ articles });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching articles." });
  }
}

async function handlePostRequest(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  res.status(200).json("create a new article");
}
