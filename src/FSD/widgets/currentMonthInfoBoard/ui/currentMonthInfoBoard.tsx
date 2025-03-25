
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import { Spinner } from "../../../shared/ui/Spinner/Spinner";
import { TInfoAboutLessonsCurrentMonth } from "../../../entities/lessonsInfoBoard/model/info.type";
import { InfoContainer } from "./InfoContainer";

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
    <Card
      variant="outlined"
      className="!min-w-[1175px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
    >
      <CardHeader
        className="!pb-0"
        title={<h5 className="text-m font-bold flex items-center gap-2">Current month info</h5>}
      />
      <CardContent className="!px-2">
        <div className="flex flex-row gap-2 justify-between px-6">
          <InfoContainer title="Amount of lessons" value={data.currentFullAmount} />
          <InfoContainer title="Full income" value={data.currentFullIncome} />
          <InfoContainer title="Paid income" value={data.currentPaidIncome} />
          <InfoContainer title="Tax" value={data.currentTax} />
          <InfoContainer title="Week amount" value={data.currentWeekAmount} />
          <InfoContainer title="Week income" value={data.currentWeekIncome} />
        </div>
      </CardContent>
    </Card>
  )
}