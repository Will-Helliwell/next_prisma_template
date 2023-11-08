import { PrismaClient } from "@prisma/client";

/**
 * This is the prismClient object used to prevent multiple instances of the prisma client being created when running npm run dev
 * In npm run dev, a cache is cleared meaning that prisma.connect can run multiple times if included in the serverless functions
 * It is stored on the global object so that it can be accessed from anywhere in the app
 * It is only created once and then reused
 * This is a workaround for the issue described here:
 * @see <a href="https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices#:~:text=The%20solution%20in%20this%20case%20is%20to%20instantiate,already%20present%20to%20prevent%20instantiating%20extra%20PrismaClient%20instances">Prisma Docs</a>
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// If global prisma client exists then export this, else create a new one
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// In development and test environments, store currently open prisma client globally
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
