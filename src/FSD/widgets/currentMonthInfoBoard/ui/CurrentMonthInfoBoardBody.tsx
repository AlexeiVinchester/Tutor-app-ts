import { InfoContainer } from "./InfoContainer";
import { TInfoAboutLessonsCurrentMonth } from "../../../entities/lessonsInfoBoard/model/info.type";

type TCurrentMonthInfoBoardBody = {
  isPendingUpdate: boolean;
  isError: boolean;
  data: TInfoAboutLessonsCurrentMonth | undefined;
};

export const CurrentMonthInfoBoardBody = ({
  isPendingUpdate,
  isError,
  data
}: TCurrentMonthInfoBoardBody) => {
  if (isError || !data) return <p>Yooops, something goes wrong!</p>;
  if (isPendingUpdate) return <div className="text-main-orange">Loading of info...</div>;

  return (
    <div className="flex flex-row gap-2 justify-between px-6">
      <InfoContainer title="Amount of lessons" value={data.currentFullAmount} />
      <InfoContainer title="Full income (BYN)" value={data.currentFullIncome} />
      <InfoContainer title="Paid income (BYN)" value={data.currentPaidIncome} />
      <InfoContainer title="Tax (BYN)" value={data.currentTax} />
      <InfoContainer title="Week amount" value={data.currentWeekAmount} />
      <InfoContainer title="Week income (BYN)" value={data.currentWeekIncome} />
    </div>
  );
};