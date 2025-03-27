import { Avatar, Card, CardHeader } from "@mui/material";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PaymentIcon from '@mui/icons-material/Payment';
import { useMutation } from "@tanstack/react-query";
import { sendDebtorPayment } from "../api/loaders";
import { TDebtor } from "../../../../entities/debtor/model/debtor.type";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";

type TDebtorContainerProps = {
  debtor: TDebtor;
};

export const DebtorContainer = ({ debtor }: TDebtorContainerProps) => {
  const { updateAllData } = useLessonsPageContext();
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

  const handleClickPayDebt = async () => {
    payDebtByName();
  };

  return (
    <Card
      variant="outlined"
      className="!w-[96%] !min-w-[350px] !shadow-[0_3px_8px_#ABB2B9] !rounded-[22px] "
    >
      <CardHeader
        avatar={<Avatar src="/assets/student.png" className="!w-10 !h-10" />}
        title={<h5 className="!text-m font-bold">{debtor.name}</h5>}
        subheader={<h5>{debtor.debt} BYN - {debtor.amount} lessons</h5>}
        action={
          <BoardStyledButton
            icon={isPending ? HourglassEmptyIcon : PaymentIcon}
            onClick={handleClickPayDebt}
            disabled={isPending}
            toolTipTitle="Pay debt"
            iconSize="medium"
          />
        }
      />
    </Card>
  );
};