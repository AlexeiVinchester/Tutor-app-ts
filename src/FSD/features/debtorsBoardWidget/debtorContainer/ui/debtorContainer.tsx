import { Avatar, Card, CardHeader } from "@mui/material";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import PaymentIcon from '@mui/icons-material/Payment';
import { TDebtor } from "../../../../entities/debtor/model/debtor.type";
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";
import { usePayDebtByName } from "../lib/usePayDebtByName";

type TDebtorContainerProps = {
  debtor: TDebtor;
};

export const DebtorContainer = ({ debtor }: TDebtorContainerProps) => {
  const { isPending, handleClickPayDebt } = usePayDebtByName(debtor);

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