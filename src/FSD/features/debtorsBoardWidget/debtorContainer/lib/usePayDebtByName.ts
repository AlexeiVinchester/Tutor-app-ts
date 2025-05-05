import { useMutation } from "@tanstack/react-query";
import { sendDebtorPayment } from "../api/loaders";
import { TDebtor } from "../../../../entities/debtor/model/debtor.type";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { useUpdatePageDataContext } from "../../../../shared/context/updatePageDataContext";

export const usePayDebtByName = (debtor: TDebtor) => {
  const { updateAllData } = useUpdatePageDataContext();
  const { openSnackMessage } = useSnackMessageContext();

  const { mutate: payDebtByName, isPending } = useMutation({
    mutationKey: ['payDebtByName', debtor.name],
    mutationFn: () => sendDebtorPayment({ name: debtor.name }),
    onSuccess: () => {
      updateAllData();
      openSnackMessage(showSuccessMessage(`${debtor.name} has paid all debt for lessons!`));
    },
    onError: (error) => {
      openSnackMessage(createApiErrorMessage(error));
    }
  });

  const handleClickPayDebt = () => {
    payDebtByName();
  };

  return { isPending, handleClickPayDebt }
};