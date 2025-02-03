import axios, { AxiosError } from 'axios';
import { ApiError } from './apiError';
import { HTTPMethods } from './httpMethods.enum';
import { TServerError } from './serverError.type';
import { baseDomain } from '../config/config';

const axiosApiClient = axios.create({
  baseURL: baseDomain,
});

export const makeApiRequest = async <T = undefined>(
  url: string,
  method: HTTPMethods,
  data?: T
) => {
  try {
    const response = await axiosApiClient({
      method,
      url,
      data: data || undefined,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const serverError = error as AxiosError<TServerError>;
      if (serverError.response) {
        throw new ApiError(
          serverError.response.data?.message ||
            'Unknown error occured on client while loading data!',
          serverError.response.status
        );
      } else {
        throw new ApiError(serverError.message, 0);
      }
    } else {
      throw new Error('An unexpected error occured!');
    }
  }
};
