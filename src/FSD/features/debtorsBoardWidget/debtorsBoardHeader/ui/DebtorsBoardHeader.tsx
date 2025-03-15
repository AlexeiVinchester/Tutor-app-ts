import { CardHeader, IconButton } from "@mui/material";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { useState } from "react";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { sendFullPayment } from "../api/loaders";
import { TSendFullPaymentServerAnswer } from "../model/api.types";
import UpdateIcon from '@mui/icons-material/Update';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

type TDebtorBoardHeaderProps = {
  totalDebt?: number;
  totalAmount?: number;
  updateData: () => void;
}

export const DebtorBoardHeader = ({ totalAmount, totalDebt, updateData }: TDebtorBoardHeaderProps) => {
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
        <>
          {(totalAmount && totalDebt) &&
            <h5>Total debt: {totalDebt} BYN - {totalAmount} lessons</h5>
          }
        </>
      }
      action={
        <div className="flex">
          <IconButton
            size="large"
            className="!text-send-data-button-text disabled:bg-gray-400"
            onClick={updateData}
            disabled={isPending}
          >
            <UpdateIcon fontSize="large" className="hover:text-main-turquoise" />
          </IconButton>
          <IconButton
            size="large"
            className="!text-send-data-button-text disabled:bg-gray-400"
            onClick={handlePayFullDebt}
            disabled={isPending}
          >
            <MonetizationOnOutlinedIcon fontSize="large" className="hover:text-main-turquoise" />
          </IconButton>
        </div>
      }
    />
  );
}