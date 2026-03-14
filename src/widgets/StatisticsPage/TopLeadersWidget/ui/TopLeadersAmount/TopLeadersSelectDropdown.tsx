import classes from "./TopLeadersAmount.module.css";
import { TopLeadersSelectDropdownOption } from "./TopLeadersSelectDropdownOption";
import { TOP_LEADERS_AMOUNT_VARIANTS } from "../../../../../entities/topLeader/model/TopLeader.type";

const TopLeadersSelectDropdown = () => (
  <div className={classes.selectDropdown}>
    {TOP_LEADERS_AMOUNT_VARIANTS.map((amount) => (
      <TopLeadersSelectDropdownOption amount={amount} key={amount} />
    ))}
  </div>
);
TopLeadersSelectDropdown.displayName = "TopLeadersSelectDropdown";

export { TopLeadersSelectDropdown };