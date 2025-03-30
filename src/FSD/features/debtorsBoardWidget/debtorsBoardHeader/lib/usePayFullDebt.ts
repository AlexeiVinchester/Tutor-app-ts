import { useMutation } from "@tanstack/react-query";
import { sendFullPayment } from "../api/loaders";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";

export const usePayTotalDebt = () => {
  const { updateAllData } = useLessonsPageContext();
  const { openSnackMessage } = useSnackMessageContext();

  const {
    mutate: payTotalDebt,
    isPending: isPendingPayingTotalDebt
  } = useMutation({
    mutationKey: ['payTotalDebt'],
    mutationFn: sendFullPayment,
    onSuccess: () => {
      updateAllData();
      openSnackMessage(showSuccessMessage(`Total debt was paid successfully!`));
    },
    onError: (error) => openSnackMessage(createApiErrorMessage(error))
  });

  const handlePayTotalDebt = () => payTotalDebt();

  return {
    isPendingPayingTotalDebt,
    handlePayTotalDebt
  };
};