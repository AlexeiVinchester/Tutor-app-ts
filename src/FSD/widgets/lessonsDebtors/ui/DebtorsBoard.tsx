import { Card, CardContent } from "@mui/material";
import { TDebtorsInfo } from "../../../entities/debtor/model/debtor.type";
import { DebtorBoardHeader } from "../../../features/debtorsBoardWidget/debtorsBoardHeader/ui/DebtorsBoardHeader";
import { DebtorsBoardBody } from "./DebtorsBoardBody";

export type TLessonsDebtorsProps = {
  data: TDebtorsInfo | null;
  isLoading: boolean;
  isError: boolean;
  updateDebtors: () => void;
}

export const DebtorsBoard = ({ data, isLoading, isError, updateDebtors }: TLessonsDebtorsProps) => {
  return (
    <Card
      variant="outlined"
      className="!min-w-[420px] max-h-[670px] !min-h-[670px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
    >
      <DebtorBoardHeader
        updateData={updateDebtors}
        totalAmount={data?.totalAmount}
        totalDebt={data?.totalDebt}
      />
      <CardContent className="!px-2">
        <div className="max-h-[560px] overflow-y-auto">
          <DebtorsBoardBody isLoading={isLoading} isError={isError} debtors={data?.debtors} />
        </div>
      </CardContent>

    </Card>
  );
};
