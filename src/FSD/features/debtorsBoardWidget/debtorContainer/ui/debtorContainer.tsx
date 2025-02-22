import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
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
    <Card
      variant="outlined"
      className="!min-w-[350px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px] "
    >
      <CardHeader
        avatar={
          <Avatar
            src="/assets/student.png"
            className="!w-10 !h-10"
          />
        }
        title={
          <h5 className="! text-m font-bold  flex items-center gap-2">
            {debtor.name}
          </h5>
        }
        subheader={
          <h5>
            {debtor.debt} BYN - {debtor.amount} lessons
          </h5>
        }
        action={
          <IconButton
            onClick={handleClickPayDebt}
            disabled={isPending}
            size="large"
            className="!text-send-data-button-text"
          >
            {isPending ? <HourglassEmptyIcon /> : <PaymentIcon />}
          </IconButton>
        }
      />

    </Card>

  );
}