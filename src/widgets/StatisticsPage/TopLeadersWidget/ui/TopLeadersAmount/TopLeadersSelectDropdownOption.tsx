import { useCallback } from "react";
import { useDispatch } from "react-redux";
import classes from "./TopLeadersAmount.module.css";
import { toggleTopLeadersAmount } from "../../model/TopLeadersSlice";
import { TTopLeadersAmount } from "../../../../../entities/topLeader/model/TopLeader.type";

interface ITopLeadersSelectDropdownOption {
  amount: TTopLeadersAmount;
};

const TopLeadersSelectDropdownOption = ({ amount }: ITopLeadersSelectDropdownOption) => {
  const dispatch = useDispatch();

  const handleChangeAmount = useCallback(
    () => {
      dispatch(toggleTopLeadersAmount(amount));
    },
    [amount, dispatch]
  );

  return (
    <div key={amount} className={classes.dropdownItem} onClick={handleChangeAmount}>
      {amount}
    </div>
  )
};
TopLeadersSelectDropdownOption.displayName = "TopLeadersSelectDropdownOption";

export { TopLeadersSelectDropdownOption };