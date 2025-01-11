import { TSnackMessageInfo } from "../types/snackMessage";
import { ApiError } from "./apiError";

export const createApiErrorMessage = (error: unknown): TSnackMessageInfo => {
  const message =
    error instanceof ApiError ?
      `Status: ${error.httpStatus} - ${error.message}`
      : ((error instanceof Error)
        ? error.message
        : 'Unknown error occured!');
  return { message, severity: 'error' };
};