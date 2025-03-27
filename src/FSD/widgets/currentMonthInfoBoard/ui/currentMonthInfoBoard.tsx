
import { Card, CardContent } from "@mui/material";
import { InfoContainer } from "./InfoContainer";
import { useQuery } from "@tanstack/react-query";
import { loadCurrentMonthInfo } from "../../../entities/lessonsInfoBoard/api/loader";
import { CurrentMonthInfoBoardHeader } from "../../../features/currentMonthInfoBoardWidget/currentMonthInfoBoardHeader/CurrentMonthInfoBoardHeader";



export const CurrentMonthInfoBoard = () => {
  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ['currentMonthInfo'],
    queryFn: () => loadCurrentMonthInfo()
  });

  return (
    <Card
      variant="outlined"
      className="!min-w-[1175px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
    >
      <CurrentMonthInfoBoardHeader isPending={isLoading || isFetching} />
      <CardContent className="!px-2">
        {isError && <p>Yooops, something goes wrong!</p>}
        {isLoading && <div className="text-main-orange">Loading of info...</div>}
        {(!isLoading && data) &&
          <div className="flex flex-row gap-2 justify-between px-6">
            <InfoContainer title="Amount of lessons" value={data.currentFullAmount} />
            <InfoContainer title="Full income (BYN)" value={data.currentFullIncome} />
            <InfoContainer title="Paid income (BYN)" value={data.currentPaidIncome} />
            <InfoContainer title="Tax (BYN)" value={data.currentTax} />
            <InfoContainer title="Week amount" value={data.currentWeekAmount} />
            <InfoContainer title="Week income (BYN)" value={data.currentWeekIncome} />
          </div>
        }
      </CardContent>
    </Card>
  )
}