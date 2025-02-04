import { createNewLessonFormEndPoints } from "../../../features/lessonsContainerWidget/createNewLessonForm/api/endPoints";
import { TLoadInitialDataServerAnswer } from "../../../features/lessonsContainerWidget/createNewLessonForm/model/api.types";
import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";

export const loadInitialData: TLoaderData<TLoadInitialDataServerAnswer> = async () => {
  const response: TLoadInitialDataServerAnswer = await makeApiRequest(
    createNewLessonFormEndPoints.loadInitialData,
    HTTPMethods.GET
  );

  return response;
};
