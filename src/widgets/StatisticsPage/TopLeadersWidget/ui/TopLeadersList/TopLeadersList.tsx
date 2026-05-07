import classes from "./TopLeadersList.module.css";
import { TopLeadersListSkeleton } from "./TopLeadersListSkeleton";
import { TopLeaderCard } from "../TopLeadersCard/TopLeaderCard";
import { EmptyContainer } from "../../../../../shared/ui/EmptyContainer/EmptyContainer";
import { IWithTopLeaders } from "../../../../../entities/topLeader/model/TopLeader.type";
import { TopLeadersDataContainer } from "../../model/TopLeadersDataContainer";

const TopLeadersEmptyComponent = () => {
  return (
    <EmptyContainer
      renderEmptyContent={() => <div className={classes.empty}>There are no students</div>}
    />
  );
};
TopLeadersEmptyComponent.displayName = "TopLeadersEmptyComponent";

const TopLeadersContentComponent = ({ topLeaders }: IWithTopLeaders) => {
  return (
    <div className={classes.topLeadersList}>
      {topLeaders.map(({ name, surname, cryteriaValue, id }, index) => (
        <TopLeaderCard 
          key={id} 
          position={index + 1} 
          name={name} 
          surname={surname} 
          criteriaValue={cryteriaValue} 
        />
      ))}
    </div>
  );
};
TopLeadersContentComponent.displayName = "TopLeadersContentComponent";

const TopLeadersList = () => {
  return (
    <TopLeadersDataContainer
      renderEmptyComponent={TopLeadersEmptyComponent}
      renderSceletonComponent={(amount) => <TopLeadersListSkeleton amount={amount} />}
      renderContentComponent={(topLeaders) => <TopLeadersContentComponent topLeaders={topLeaders} />}
    />
  );
};
TopLeadersList.displayName = "TopLeadersList";

export { TopLeadersList };
