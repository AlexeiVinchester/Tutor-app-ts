import { CardHeader } from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendFullPayment } from "../api/loaders";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { createApiErrorMessage } from "../../../../shared/api/createApiErrorMessage";
import { useSnackMessageContext } from "../../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { showSuccessMessage } from "../../../../shared/context/snackMessageContext/lib/helpers";
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";

type TDebtorBoardHeaderProps = {
  totalDebt?: number;
  totalAmount?: number;
  isPendingUpdate: boolean;
};

export const DebtorBoardHeader = ({
  totalAmount,
  totalDebt,
  isPendingUpdate
}: TDebtorBoardHeaderProps) => {
  const { updateAllData } = useLessonsPageContext();
  const { openSnackMessage } = useSnackMessageContext();
  const client = useQueryClient();

  const { mutate: payFullDebt, isPending: isPendingDebt } = useMutation({
    mutationKey: ['payFullDebt'],
    mutationFn: sendFullPayment,
    onSuccess: () => {
      updateAllData();
      openSnackMessage(showSuccessMessage(`Debt in ${totalDebt} was paid successfully!`));
    },
    onError: (error) => openSnackMessage(createApiErrorMessage(error))
  });

  const handlePayFullDebt = () => payFullDebt();

  const handleClickUpdateData = () => client.invalidateQueries({ queryKey: ['debtors'] });

  return (
    <CardHeader
      className="!pb-0"
      title={<h5 className="text-m font-bold flex items-center gap-2">Debtors board</h5>}
      subheader={
        <>
          {(totalAmount && totalDebt) &&
            <h5>Total debt: {totalDebt} BYN - {totalAmount} lessons</h5>
          }
        </>
      }
      action={
        <div className="flex">
          <BoardStyledButton
            icon={UpdateIcon}
            onClick={handleClickUpdateData}
            disabled={isPendingUpdate}
            toolTipTitle="Update debtors"
          />
          <BoardStyledButton
            icon={MonetizationOnOutlinedIcon}
            onClick={handlePayFullDebt}
            disabled={isPendingUpdate || isPendingDebt}
            toolTipTitle="Pay total debt"
          />
        </div>
      }
    />
  );
};