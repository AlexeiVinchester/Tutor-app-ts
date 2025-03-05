import { debtorsEndPoints } from "../../../../entities/debtor/api/endPoints";
import { makeApiRequest } from "../../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../../shared/types/loaderData.type";
import { TSendDebtorPaymentServerAnswer, TSendDebtorPaymentData } from "../model/api.types";

export const sendDebtorPayment: TLoaderData<TSendDebtorPaymentServerAnswer, TSendDebtorPaymentData> = async (data) => {
  const response: TSendDebtorPaymentServerAnswer = await makeApiRequest(
    debtorsEndPoints.payStudentDebt,
    HTTPMethods.PATCH,
    data
  );

  return response;
};