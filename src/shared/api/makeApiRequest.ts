import axios, { AxiosError } from 'axios';
import { ApiError } from './apiError';
import { HTTPMethods } from '../types/httpMethods.enum';
import { TServerError } from '../types/serverError.type';
import { baseDomain } from '../config/config';

const axiosApiClient = axios.create({
  baseURL: baseDomain,
});

export type TMakeApiRequestParams<T> = {
  url: string;
  method: HTTPMethods;
  data?: T;
  params?: Record<string, unknown>;
};

export const makeApiRequest = async <TRequestData, TResponseData = void>(
  { url, data, method, params }: TMakeApiRequestParams<TRequestData>
): Promise<TResponseData> => {
  try {
    const response = await axiosApiClient({
      url,
      method,
      data,
      params,
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<TServerError>;
      if (serverError.response) {
        const errorMessage =
          serverError.response.data?.message || 'Unknown server error occurred';
        throw new ApiError(errorMessage, serverError.response.status);
      } else {
        throw new ApiError(
          serverError.message || 'Network error occurred',
          0
        );
      }
    } else if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('An unknown error occurred on server!');
    }
  }
};
