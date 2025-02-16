import { IconButton } from "@mui/material";
import { TDebtor } from "../../../entities/debtor/model/debtor.type";

type TLessonsDebtorsProps = {
  data: TDebtor[] | null;
  isLoading: boolean;
  isError: boolean;
  updateData: () => void;
}
export const LessonsDebtors = ({ data, isLoading, isError, updateData }: TLessonsDebtorsProps) => {
  if (isLoading) {
    return <p>Loading od debtors...</p>
  }

  if (isError || !data) {
    return (
      <>
        <p>Something go wrong!</p>
        <IconButton onClick={updateData}>Update lessons</IconButton>
      </>
    )
  }

  return (
    <div className="bg-slate-400">
      {data.map(item => (
        <div>
          <p>Name: {item.name} - debt: {item.debt} - amount of lessons: {item.amount}</p>
        </div>
      ))}
    </div>
  );
};
