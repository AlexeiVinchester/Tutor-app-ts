import { studentsEndPoints } from "../../../../../entities/student/api/endPoints";
import { TStudent } from "../../../../../entities/student/model/student.type";
import { makeApiRequest } from "../../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../../shared/types/loaderData.type";

export type TLoadInitialStudentParamsResponse = {
  nextId: number;
};

export const loadInitialStudentParams: TLoaderData<TLoadInitialStudentParamsResponse> = async () => {
  const response = await makeApiRequest<void, TLoadInitialStudentParamsResponse>({
    url: studentsEndPoints.loadInitialStudentParams,
    method: HTTPMethods.GET
  });

  return response;
};

export type TSendNewStudentResponse = {
  savedStudent: TStudent;
}

export const sendNewStudent: TLoaderData<TSendNewStudentResponse, Omit<TStudent, '_id'>> = async (data) => {
  const response = await makeApiRequest<Omit<TStudent, '_id'>, TSendNewStudentResponse>({
    url: studentsEndPoints.sendNewStudent,
    method: HTTPMethods.POST,
    data
  });

  return response;
}