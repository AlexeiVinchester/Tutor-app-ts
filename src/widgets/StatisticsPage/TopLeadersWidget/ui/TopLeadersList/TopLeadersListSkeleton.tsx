import { useSelector } from "react-redux";
import classes from "./TopLeadersList.module.css";
import { topLeadersCurrentAmountSelector } from "../../model/TopLeadersSelectors";
import { range } from "../../../../../shared/utils/range";
import { Skeleton } from "../../../../../shared/ui/Skeleton/Skeleton";

const TopLeadersListSkeleton = () => {
  const topLeadersAmount = useSelector(topLeadersCurrentAmountSelector);

  return (
    <div className={classes.topLeadersList}>
      {range(topLeadersAmount).map((item) => (
        <Skeleton key={item} className={classes.topLeaderCardSkeleton} />
      ))}
    </div>
  )
};
TopLeadersListSkeleton.displayName = "TopLeadersListSkeleton";

export { TopLeadersListSkeleton };