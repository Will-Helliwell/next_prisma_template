import { ZodError } from "zod";

export function getErrorHttpStatusCode(error: unknown): number {
  if (!(error instanceof Error)) return 500;

  switch (error.message) {
    case "InvalidRequestBody":
      return 400;
    case "InvalidHttpMethod":
      return 405;
    case "InvalidQueryParameter":
      return 400;
    case "InvalidPathParameter":
      return 400;
    case "ResourceNotFoundAtValidEndpoint":
      return 404;
    case "ResourceNotFoundAtInvalidEndpoint":
      return 404;
    default:
      return 500;
  }
}

export function getErrorMessage(error: unknown): string {
  if (typeof error === "string") return error;
  if (error instanceof ZodError) {
    const message = error.issues.map((issue) => issue.message).join(", ");
    return message;
  } // ZodError is a subclass of error, so this if statement needs to come before the instanceof Error one or that condition will match, preventing this one from ever matching
  if (error instanceof Error) return error.message;
  return "UnknownError";
}
