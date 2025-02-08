import { useLoadDataFromServer } from "../../../shared/hooks/useLoadDataFromServer"
import { Spinner } from "../../../shared/ui/Spinner/Spinner";
import { loadCurrentMonthInfo } from "../api/loader"

export const CurrentMonthInfoBoard = () => {
  const { data, isLoading, isError } = useLoadDataFromServer(loadCurrentMonthInfo);

  if (isLoading) {
    return <Spinner />
  }

  if(isError || !data) {
    return <p>Yooops, something goes wrong!</p>
  }

  return (
    <div>
      <p>Current amount: {data.currentAmount}</p>
      <p>Current full income: {data.currentFullIncome}</p>
      <p>Current paid income: {data.currentPaidIncome}</p>
      <p>Current cash income: {data.cashIncome}</p>
      <p>Current card income: {data.cardIncome}</p>
      <p>Current tax: {data.currentTax}</p>
    </div>
  )
}