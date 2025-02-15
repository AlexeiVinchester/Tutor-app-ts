
import { IconButton } from "@mui/material";
import { Spinner } from "../../../shared/ui/Spinner/Spinner";
import { TInfoAboutLessonsCurrentMonth } from "../model/info.type";

type TCurrentMonthInfoBoardProps = {
  data: TInfoAboutLessonsCurrentMonth | null;
  isLoading: boolean;
  isError: boolean;
  updateData: () => void;
}

export const CurrentMonthInfoBoard = ({ data, isLoading, isError, updateData }: TCurrentMonthInfoBoardProps) => {
  if (isLoading) {
    return <Spinner />
  }

  if (isError || !data) {
    return (
      <>
        <p>Yooops, something goes wrong!</p>
        <IconButton onClick={updateData}>Update lessons</IconButton>
      </>
    )
  }

  return (
    <div className="bg-red-300">
      <p>Current amount: {data.currentAmount}</p>
      <p>Current full income: {data.currentFullIncome}</p>
      <p>Current paid income: {data.currentPaidIncome}</p>
      <p>Current cash income: {data.cashIncome}</p>
      <p>Current card income: {data.cardIncome}</p>
      <p>Current tax: {data.currentTax}</p>
    </div>
  )
}