import { useSelector } from "react-redux";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from "./TopLeadersAmount.module.css";
import { TopLeadersSelectDropdown } from "./TopLeadersSelectDropdown";
import { topLeadersCurrentAmountSelector } from "../../model/TopLeadersSelectors";
import { useToggle } from "../../../../../shared/hooks/useToggle";

const TopLeadersAmountSelect = () => {
  const topLeadersCurrentAmount = useSelector(topLeadersCurrentAmountSelector);

  const { value: show, toggle: handleToggleClick } = useToggle()

  return (
    <div className={classes.selectWrapper} onClick={handleToggleClick}>
      <div>{topLeadersCurrentAmount}</div>
      <ExpandMoreIcon fontSize="small" className={show ? classes.expandMoreIcon : undefined} />

      {show ? <TopLeadersSelectDropdown /> : null
      }
    </div>
  );
}
TopLeadersAmountSelect.displayName = "TopLeaadersAmountSelect";

export { TopLeadersAmountSelect };