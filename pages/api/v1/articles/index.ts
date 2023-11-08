import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@project-root/services/db";
import { z } from "zod";
import {
  getErrorHttpStatusCode,
  getErrorMessage,
} from "@project-root/utils/errors";

const getQueryParamsSchema = z.object({
  limit: z
    .string()
    .refine((str) => !isNaN(+str), {
      message: "Limit must be a valid number.",
    })
    .optional(),
});

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
    let articles = {};
    const getQueryParams = getQueryParamsSchema.parse(req.query);
    const { limit } = getQueryParams;
    if (limit === undefined) {
      articles = await prisma.article.findMany();
    } else {
      const limitAsNumber = parseInt(limit);
      articles = await prisma.article.findMany({
        take: limitAsNumber,
      });
    }
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
