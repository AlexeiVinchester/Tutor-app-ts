import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@mui/material";
import { DebtorsBoardBody } from "./DebtorsBoardBody";
import { DebtorBoardHeader } from "../../../features/debtorsBoardWidget/debtorsBoardHeader";
import { loadDebtors } from "../../../entities/debtor/api/loaders";

export const DebtorsBoard = () => {
  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ['debtors'],
    queryFn: () => loadDebtors()
  });

  return (
    <Card
      variant="outlined"
      className="!min-w-[420px] max-h-[690px] !min-h-[690px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
    >
      <DebtorBoardHeader
        isPendingUpdate={isLoading || isFetching}
        totalAmount={data?.totalAmount}
        totalDebt={data?.totalDebt}
      />
      <CardContent className="!px-2 !pb-0">
        <div className="max-h-[574px] overflow-y-auto">
          <DebtorsBoardBody isPendingUpdate={isLoading || isFetching} isError={isError} debtors={data?.debtors} />
        </div>
      </CardContent>
    </Card>
  );
};
