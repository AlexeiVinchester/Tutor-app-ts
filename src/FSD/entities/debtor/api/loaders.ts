import {
  TSendDebtorPaymentServerAnswer,
  TSendDebtorPaymentData,
  TSendFullPaymentServerAnswer
} from "./api.types";
import { debtorsEndPoints } from "./endPoints";
import { TDebtorsInfo } from "../model/debtor.type";
import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";

export const loadDebtors: TLoaderData<TDebtorsInfo> = async () => {
  const debtors: TDebtorsInfo = await makeApiRequest(
    debtorsEndPoints.getDebtors,
    HTTPMethods.GET
  );

  return debtors;
};

export const sendDebtorPayment: TLoaderData<TSendDebtorPaymentServerAnswer, TSendDebtorPaymentData> = async (data) => {
  const response: TSendDebtorPaymentServerAnswer = await makeApiRequest(
    debtorsEndPoints.payStudentDebt,
    HTTPMethods.PATCH,
    data
  );

  return response;
};

export const sendFullPayment: TLoaderData<TSendFullPaymentServerAnswer> = async () => {
  const response: TSendFullPaymentServerAnswer = await makeApiRequest(
    debtorsEndPoints.payFullDebt,
    HTTPMethods.PATCH
  );

  return response;
};