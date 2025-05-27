import { studentsEndPoints } from "../../../../../entities/student/api/endPoints";
import { TStudent } from "../../../../../entities/student/model/student.type"
import { makeApiRequest } from "../../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../../shared/types/loaderData.type";

export type TSendEditedStudentResponse = {
  editedStudent: TStudent;
};

export const sendEditedStudent: TLoaderData<TSendEditedStudentResponse, TStudent> = async (data) => {
  const response = await makeApiRequest<TStudent, TSendEditedStudentResponse>({
    url: studentsEndPoints.sendEditedStudent,
    method: HTTPMethods.PATCH,
    data
  });

  return response;
};