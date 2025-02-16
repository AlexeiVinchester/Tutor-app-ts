import { endPoints } from "../../../../entities/lesson/api/endPoints";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";

export type TSendNewPaidStatusServerAnswer = {
  newPaidStatus: boolean;
}

export type TSendNewpaidStatusData = {
  newPaidStatus: boolean;
  _id: string;
}

export const sendNewPaidStatus: TLoaderData<TSendNewPaidStatusServerAnswer, TSendNewpaidStatusData> = async (data) => {
  const response: TSendNewPaidStatusServerAnswer = await makeApiRequest(
    endPoints.sendNewPaidStatus,
    HTTPMethods.PATCH,
    data
  );

  return response;
};