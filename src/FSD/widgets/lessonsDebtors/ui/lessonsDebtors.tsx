import { Card, CardHeader, IconButton } from "@mui/material";
import { TDebtorsInfo } from "../../../entities/debtor/model/debtor.type";
import { DebtorContainer } from "../../../features/debtorsBoardWidget/debtorContainer/ui/debtorContainer";

export type TLessonsDebtorsProps = {
  data: TDebtorsInfo | null;
  isLoading: boolean;
  isError: boolean;
  updateDebtors: () => void;
}

export const LessonsDebtors = ({ data, isLoading, isError, updateDebtors }: TLessonsDebtorsProps) => {
  if (isLoading) {
    return <p>Loading od debtors...</p>
  }

  if (isError || !data) {
    return (
      <>
        <p>Something go wrong!</p>
        <IconButton onClick={updateDebtors}>Update Debtors</IconButton>
      </>
    )
  }

  return (
    <Card
      variant="outlined"
      className="!pb-3 !min-w-[400px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px] "
    >
      <CardHeader
        title={
          <h5 className="text-m font-bold flex items-center gap-2">
            Debtors board
          </h5>
        }
        subheader={
          <h5>
            Total debt: {data.totalDebt} BYN - {data.totalAmount} lessons
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
      <div className="!flex !flex-col items-center gap-2">
        {data.debtors.map(item => (
          <DebtorContainer key={item.name} debtor={item} />
        ))}
      </div>

    </Card>


  );
};
