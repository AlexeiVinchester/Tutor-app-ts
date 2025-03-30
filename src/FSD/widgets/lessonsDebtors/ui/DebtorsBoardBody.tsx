import { DebtorsList } from "./DebtorsList";
import { TDebtor } from "../../../entities/debtor/model/debtor.type";
import { Spinner } from "../../../shared/ui/Spinner/Spinner";

type TDebtorsBoardBodyProps = {
  isPendingUpdate: boolean;
  isError: boolean;
  debtors: TDebtor[] | undefined;
};

export const DebtorsBoardBody = ({ isPendingUpdate, debtors, isError }: TDebtorsBoardBodyProps) => {
  if (isPendingUpdate) {
    return <Spinner />;
  }

  if (isError || !debtors) {
    return <div className="text-main-orange">Something went wrong! try again!</div>;
  }

  return (
    <DebtorsList debtors={debtors} />
  );
};