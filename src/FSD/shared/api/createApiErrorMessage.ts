import { TSnackMessageInfo } from "../types/snackMessage.type";
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