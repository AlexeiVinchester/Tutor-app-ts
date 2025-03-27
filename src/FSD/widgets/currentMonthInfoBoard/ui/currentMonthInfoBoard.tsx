import { Card, CardContent } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { CurrentMonthInfoBoardBody } from "./CurrentMonthInfoBoardBody";
import { CurrentMonthInfoBoardHeader } from "../../../features/currentMonthInfoBoardWidget/currentMonthInfoBoardHeader/CurrentMonthInfoBoardHeader";
import { loadCurrentMonthInfo } from "../../../entities/lessonsInfoBoard/api/loader";

export const CurrentMonthInfoBoard = () => {
  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ['currentMonthInfo'],
    queryFn: () => loadCurrentMonthInfo()
  });

  return (
    <Card
      variant="outlined"
      className="!min-w-[1158px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
    >
      <CurrentMonthInfoBoardHeader isPending={isLoading || isFetching} />
      <CardContent className="!px-2">
        <CurrentMonthInfoBoardBody
          isPendingUpdate={isLoading || isFetching}
          isError={isError}
          data={data}
        />
      </CardContent>
    </Card>
  );
};