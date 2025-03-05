import { debtorsEndPoints } from "../../../../entities/debtor/api/endPoints";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";
import { TSendFullPaymentServerAnswer } from "../model/api.types";

export const sendFullPayment: TLoaderData<TSendFullPaymentServerAnswer> = async () => {
  const response: TSendFullPaymentServerAnswer = await makeApiRequest(
    debtorsEndPoints.payFullDebt,
    HTTPMethods.PATCH
  );

  return response;
};