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
};

export const makeApiRequest = async <TData, TResponseDataType = void>(
  { url, data, method }: TMakeApiRequestParams<TData>
): Promise<TResponseDataType> => {
  try {
    const response = await axiosApiClient({
      url,
      method,
      data: data || undefined
    });

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<TServerError>;
      if (serverError.response) {
        throw new ApiError(
          serverError.response.data.message || 'Unknown server error was occured',
          serverError.response.status
        );
      }
      else {
        throw new ApiError(
          serverError.message,
          0
        );
      }
    } else if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('An unknown error occured on server!');
    }
  }
};
