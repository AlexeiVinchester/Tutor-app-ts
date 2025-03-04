import { Card, IconButton } from "@mui/material";
import { TDebtorsInfo } from "../../../entities/debtor/model/debtor.type";
import { DebtorBoardHeader } from "../../../features/debtorsBoardWidget/debtorsBoardHeader/ui/DebtorsBoardHeader";
import { DebtorsList } from "./DebtorsList";

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
        totalAmount={data.totalAmount}
        totalDebt={data.totalDebt}
      />
      <DebtorsList debtors={data.debtors} />
    </Card>
  );
};
