import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";
import { TDebtorsInfo } from "../model/debtor.type";

export const loadDebtors: TLoaderData<TDebtorsInfo> = async () => {
  const debtors: TDebtorsInfo = await makeApiRequest(
    '/lessons/getDebtors',
    HTTPMethods.GET
  );

  return debtors;
};