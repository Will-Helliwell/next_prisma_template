import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@project-root/services/db";
import {
  getErrorHttpStatusCode,
  getErrorMessage,
} from "@project-root/utils/errors";

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
    const httpStatusCode = getErrorHttpStatusCode(error);
    const errorMessage = getErrorMessage(error);
    res.status(httpStatusCode).json({ error: errorMessage });
  }
}

async function handlePostRequest(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  res.status(200).json("create a new article");
}
