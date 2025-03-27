import { DebtorContainer } from "../../../features/debtorsBoardWidget/debtorContainer/ui/debtorContainer";
import { TDebtor } from "../../../entities/debtor/model/debtor.type"

type TDebtorsListProps = {
  debtors: TDebtor[];
}

export const DebtorsList = ({ debtors }: TDebtorsListProps) => {
  if (debtors.length === 0) {
    return <p className="text-red-400">There are no debtors</p>
  };

  return (
    <div className="!flex !flex-col items-center gap-2 pb-2">
      {debtors.map(debtor => (
        <DebtorContainer key={debtor.name} debtor={debtor} />
      ))}
    </div>
  );
}