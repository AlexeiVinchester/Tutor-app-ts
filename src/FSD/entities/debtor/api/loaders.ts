import { debtorsEndPoints } from "./endPoints";
import { TDebtorsInfo } from "../model/debtor.type";
import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";

export const loadDebtors: TLoaderData<TDebtorsInfo> = async () => {
  const debtors: TDebtorsInfo = await makeApiRequest<void, TDebtorsInfo>({
    url: debtorsEndPoints.getDebtors,
    method: HTTPMethods.GET
  });

  return debtors;
};



