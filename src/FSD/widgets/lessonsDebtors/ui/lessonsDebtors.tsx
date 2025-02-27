import { Card, IconButton } from "@mui/material";
import { TDebtorsInfo } from "../../../entities/debtor/model/debtor.type";
import { DebtorContainer } from "../../../features/debtorsBoardWidget/debtorContainer/ui/debtorContainer";
import { DebtorBoardHeader } from "../../../features/debtorsBoardWidget/debtorsBoardHeader/ui/DebtorsBoardHeader";

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
      <DebtorBoardHeader
        isLoading={isLoading}
        totalAmount={data.totalAmount}
        totalDebt={data.totalDebt}
      />
      <div className="!flex !flex-col items-center gap-2">
        {data.debtors.map(item => (
          <DebtorContainer key={item.name} debtor={item} />
        ))}
      </div>

    </Card>


  );
};
