import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { TLoaderData } from "../../../shared/types/loaderData.type";
import { TDebtor } from "../model/debtor.type";

export const loadDebtors: TLoaderData<TDebtor[]> = async () => {
  const debtors: TDebtor[] = await makeApiRequest('/lessons/getDebtors', HTTPMethods.GET);
  return debtors;
};