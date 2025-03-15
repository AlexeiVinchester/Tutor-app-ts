import { TDebtor } from "../../../entities/debtor/model/debtor.type"
import { DebtorContainer } from "../../../features/debtorsBoardWidget/debtorContainer/ui/debtorContainer";

type TDebtorsListProps = {
  debtors: TDebtor[];
}

export const DebtorsList = ({ debtors }: TDebtorsListProps) => {
  return (
    <div className="!flex !flex-col items-center gap-2 pb-2">
      {debtors.map(debtor => (
        <DebtorContainer key={debtor.name} debtor={debtor} />
      ))}
    </div>
  );
}