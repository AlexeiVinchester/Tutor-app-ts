import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";
import { TLoadGenderActivityResponseData } from "../model/api.type";
import { studentsEndPoints } from "./endPoints";

export const loadGenderActivity: TLoaderData<TLoadGenderActivityResponseData> = async () => {
  const response = await makeApiRequest<void, TLoadGenderActivityResponseData>({
    url: studentsEndPoints.getGenderActivity,
    method: HTTPMethods.GET
  });

  return response;
}