import { TSendDebtorPaymentServerAnswer, TSendDebtorPaymentData } from "../model/api.types";
import { endPoints } from "../../../../entities/lesson/api/endPoints";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";

export const sendDebtorPayment: TLoaderData<TSendDebtorPaymentServerAnswer, TSendDebtorPaymentData> = async (data) => {
  const response: TSendDebtorPaymentServerAnswer = await makeApiRequest(
    endPoints.payDebt,
    HTTPMethods.PATCH,
    data
  )

  return response;
};