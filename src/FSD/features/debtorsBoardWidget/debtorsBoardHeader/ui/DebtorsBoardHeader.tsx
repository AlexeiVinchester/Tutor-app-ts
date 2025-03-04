import { CardHeader, IconButton } from "@mui/material";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { useState } from "react";
import { sendFullPayment } from "../api/loaders";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { TSendFullPaymentServerAnswer } from "../model/api.types";

type TDebtorBoardHeaderProps = {
  totalDebt: number;
  totalAmount: number;
}

export const DebtorBoardHeader = ({ totalAmount, totalDebt }: TDebtorBoardHeaderProps) => {
  const { updateAllData } = useLessonsPageContext();
  const { openSnackMessage } = useSnackMessageContext();
  const [isPending, setIsPending] = useState<boolean>(false);

  const handlePayFullDebt = async () => {
    try {
      setIsPending(true);
      const response: TSendFullPaymentServerAnswer = await sendFullPayment();
      if (response.paymentStatus) {
        updateAllData();
        openSnackMessage(showSuccessMessage(`Debt in ${totalDebt} was paid successfully!`))
      }
    } catch (error) {
      openSnackMessage(createApiErrorMessage(error))
    } finally {
      setIsPending(false)
    }
  }

  return (
    <CardHeader
      title={
        <h5 className="text-m font-bold flex items-center gap-2">
          Debtors board
        </h5>
      }
      subheader={
        <h5>
          Total debt: {totalDebt} BYN - {totalAmount} lessons
        </h5>
      }
      action={
        <IconButton
          size="large"
          className="!text-send-data-button-text disabled:bg-gray-400"
          onClick={handlePayFullDebt}
          disabled={isPending}
        >
          Pay
        </IconButton>
      }
    />
  );
}