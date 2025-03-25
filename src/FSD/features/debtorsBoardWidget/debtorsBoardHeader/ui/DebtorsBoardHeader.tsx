import { CardHeader } from "@mui/material";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { useState } from "react";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { sendFullPayment } from "../api/loaders";
import { TSendFullPaymentServerAnswer } from "../model/api.types";
import UpdateIcon from '@mui/icons-material/Update';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { BoardHeaderStyledButton } from "../../../../shared/ui/BoardHeaderStyledButton/BoardHeaderSrtledButton";

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
      className="!pb-0"
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
          <BoardHeaderStyledButton
            icon={UpdateIcon}
            onClick={updateData}
            disabled={isPending}
            toolTipTitle="Update debtors"
          />
          <BoardHeaderStyledButton
            icon={MonetizationOnOutlinedIcon}
            onClick={handlePayFullDebt}
            disabled={isPending}
            toolTipTitle="Pay total debt"
          />
        </div>
      }
    />
  );
}