import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";
import { TLoadGenderActivityResponseData, TLoadStudentsRequestData, TLoadStudentsResponse } from "../model/api.type";
import { studentsEndPoints } from "./endPoints";

export const loadGenderActivity: TLoaderData<TLoadGenderActivityResponseData> = async () => {
  const response = await makeApiRequest<void, TLoadGenderActivityResponseData>({
    url: studentsEndPoints.loadGenderActivity,
    method: HTTPMethods.GET
  });

  return response;
};

export const loadStudents: TLoaderData<TLoadStudentsResponse, TLoadStudentsRequestData> = async (requestData = {}) => {
  const { page = 1, perPage = 6, name = '' } = requestData;

  const response = await makeApiRequest<void, TLoadStudentsResponse>({
    url: `${studentsEndPoints.loadStudents}?page=${page}&per_page=${perPage}&search=${name}`,
    method: HTTPMethods.GET
  });

  return response;
};