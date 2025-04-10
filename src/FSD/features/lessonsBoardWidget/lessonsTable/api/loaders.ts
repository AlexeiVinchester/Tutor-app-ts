import { TSendNewPaidStatusServerAnswer, TSendNewpaidStatusData } from "../model/api.type";
import { lessonsEndPoints } from "../../../../entities/lesson/api/endPoints";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";

export const sendNewPaidStatus: TLoaderData<TSendNewPaidStatusServerAnswer, TSendNewpaidStatusData> = async (data) => {
  const response = await makeApiRequest<TSendNewpaidStatusData, TSendNewPaidStatusServerAnswer>({
    url: lessonsEndPoints.sendNewPaidStatus,
    method: HTTPMethods.PATCH,
    data
  });

  return response;
};