import { IconButton } from "@mui/material";
import { TDebtor } from "../../../entities/debtor/model/debtor.type";
import { DebtorContainer } from "../../../features/debtorsBoardWidget/debtorContainer/ui/debtorContainer";

export type TLessonsDebtorsProps = {
  data: TDebtor[] | null;
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
    <div className="bg-slate-400">
      {data.map(item => (
        <DebtorContainer key={item.name} debtor={item} />
      ))}
    </div>
  );
};
