import { TPaginatedDataResponse } from "../../../shared/types/pagination";
import { TStudent } from "./student.type";

export type TLoadGenderActivityResponseData = {
  totalAmount: number;
  activeAmount: number;
  boysAmount: number;
  girlsAmount: number;
};

export type TLoadStudentsRequestData = {
  page?: number;
  perPage?: number;
  name?: string;
};

export type TLoadStudentsResponse = TPaginatedDataResponse<TStudent>;