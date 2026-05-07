import classes from "./TopLeadersList.module.css";
import { range } from "../../../../../shared/utils/range";
import { Skeleton } from "../../../../../shared/ui/Skeleton/Skeleton";
import { IWithTopLeadersAmount } from "../../../../../entities/topLeader/model/TopLeader.type";

const TopLeadersListSkeleton = ({ amount }: IWithTopLeadersAmount) => {
  return (
    <div className={classes.topLeadersList}>
      {range(amount).map((item) => (
        <Skeleton key={item} className={classes.topLeaderCardSkeleton} />
      ))}
    </div>
  )
};
TopLeadersListSkeleton.displayName = "TopLeadersListSkeleton";

export { TopLeadersListSkeleton };