import { CardHeader } from "@mui/material";
import UpdateIcon from '@mui/icons-material/Update';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";
import { usePayTotalDebt } from "../lib/usePayFullDebt";
import { useUpdateDataByClick } from "../../../../shared/hooks/useUpdateDataByClick";

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
  const { isPendingPayingTotalDebt, handlePayTotalDebt } = usePayTotalDebt();
  const handleClickUpdateData = useUpdateDataByClick(['debtors']);

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
            onClick={handlePayTotalDebt}
            disabled={isPendingUpdate || isPendingPayingTotalDebt}
            toolTipTitle="Pay total debt"
          />
        </div>
      }
    />
  );
};