import { useQuery } from "@tanstack/react-query";
import { loadDebtors } from "../../../entities/debtor/api/loaders";

export const useDebtors = () => {
  return useQuery({
    queryKey: ['debtors'],
    queryFn: () => loadDebtors()
  });
};