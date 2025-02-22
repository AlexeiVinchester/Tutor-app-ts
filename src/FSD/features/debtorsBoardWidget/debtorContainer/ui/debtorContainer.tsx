import { IconButton } from "@mui/material";
import { useState } from "react";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PaymentIcon from '@mui/icons-material/Payment';
import { TDebtor } from "../../../../entities/debtor/model/debtor.type";
import { sendDebtorPayment } from "../api/loaders";
import { TSendDebtorPaymentServerAnswer } from "../model/api.types";

type TDebtorContainerProps = {
  debtor: TDebtor;
}

export const DebtorContainer = ({ debtor }: TDebtorContainerProps) => {
  const { updateAllData } = useLessonsPageContext();
  const { openSnackMessage } = useSnackMessageContext();
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleClickPayDebt = async () => {
    try {
      setIsPending(true);
      const response: TSendDebtorPaymentServerAnswer = await sendDebtorPayment({ name: debtor.name });
      if (response.paymentStatus) {
        updateAllData();
        openSnackMessage(showSuccessMessage(`${debtor.name} has paid all debt for lessons!`))
      }
    } catch (error) {
      openSnackMessage(createApiErrorMessage(error));
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div>
      Name: {debtor.name} - debt: {debtor.debt} - amount of lessons: {debtor.amount}
      <IconButton onClick={handleClickPayDebt} disabled={isPending} >
        {isPending ? <HourglassEmptyIcon /> : <PaymentIcon />}
      </IconButton>
    </div>
  );
}