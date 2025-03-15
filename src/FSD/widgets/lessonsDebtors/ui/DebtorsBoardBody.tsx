import { TDebtor } from "../../../entities/debtor/model/debtor.type";
import { DebtorsList } from "./DebtorsList";

type TDebtorsBoardBodyProps = {
  isLoading: boolean;
  isError: boolean;
  debtors: TDebtor[] | undefined;
};

export const DebtorsBoardBody = ({ isLoading, debtors, isError }: TDebtorsBoardBodyProps) => {
  if (isLoading) {
    return <p>Loading od debtors...</p>
  }

  if (isError || !debtors) {
    return <div className="text-main-orange">Something went wrong! try again!</div>

  }

  return (
    <DebtorsList debtors={debtors} />
  );
};