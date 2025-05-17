import { TSendNewStudentActivittyResponseData, TSendNewStudentActivityRequestData } from "../model/api.types";
import { studentsEndPoints } from "../../../../entities/student/api/endPoints";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";

export const sendNewStudentActivity: TLoaderData<TSendNewStudentActivittyResponseData, TSendNewStudentActivityRequestData> = async (data) => {
  const response = await makeApiRequest<TSendNewStudentActivityRequestData, TSendNewStudentActivittyResponseData>({
    url: studentsEndPoints.sendNewActivity,
    method: HTTPMethods.PATCH,
    data
  });

  return response;
};