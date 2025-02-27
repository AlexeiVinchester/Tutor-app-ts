import { CardHeader, IconButton } from "@mui/material";

type TDebtorBoardHeaderProps = {
  totalDebt: number;
  totalAmount: number;
  isLoading: boolean
}

export const DebtorBoardHeader = ({ isLoading, totalAmount, totalDebt }: TDebtorBoardHeaderProps) => {
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
          disabled={isLoading}
          size="large"
          className="!text-send-data-button-text"
        >
          Pay
        </IconButton>
      }
    />
  );
}