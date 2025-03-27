import { TDebtor } from "../../../entities/debtor/model/debtor.type";
import { DebtorsList } from "./DebtorsList";

type TDebtorsBoardBodyProps = {
  isPendingUpdate: boolean;
  isError: boolean;
  debtors: TDebtor[] | undefined;
};

export const DebtorsBoardBody = ({ isPendingUpdate, debtors, isError }: TDebtorsBoardBodyProps) => {
  if (isPendingUpdate) {
    return <p>Loading of debtors...</p>;
  }

  if (isError || !debtors) {
    return <div className="text-main-orange">Something went wrong! try again!</div>;
  }

  return (
    <DebtorsList debtors={debtors} />
  );
};