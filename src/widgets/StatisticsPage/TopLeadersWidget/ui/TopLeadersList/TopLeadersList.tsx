import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import classes from "./TopLeadersList.module.css";
import { TopLeadersListSkeleton } from "./TopLeadersListSkeleton";
import { TopLeaderCard } from "../TopLeadersCard/TopLeaderCard";
import { topLeadersCurrentModeSelector, topLeadersCurrentAmountSelector } from "../../model/TopLeadersSelectors";
import { loadTopLeaders } from "../../../../../entities/topLeader/api/loaders";
import { EmptyContainer } from "../../../../../shared/ui/EmptyContainer/EmptyContainer";

const TopLeadersList = () => {
  const topLeadersMode = useSelector(topLeadersCurrentModeSelector);
  const topLeadersAmount = useSelector(topLeadersCurrentAmountSelector);

  const { data: topLeaders, isLoading, isError } = useQuery({
    queryKey: ["topLeaders", topLeadersAmount, topLeadersMode],
    queryFn: () => loadTopLeaders({ amount: topLeadersAmount, mode: topLeadersMode })
  });

  if (isLoading) return <TopLeadersListSkeleton />

  if (isError || !topLeaders?.length) return (
    <EmptyContainer
      renderEmptyContent={
        () => (
          <div className={classes.empty}>There are no students</div>
        )
      }
    />
  );

  return (
    <div className={classes.topLeadersList}>
      {
        topLeaders.map(({ name, surname, cryteriaValue, id }, index) => (
          <TopLeaderCard
            key={id}
            position={index + 1}
            name={name}
            surname={surname}
            criteriaValue={cryteriaValue}
            mode={topLeadersMode}
          />
        ))
      }
    </div>
  );
};
TopLeadersList.displayName = "TopLeadersList";

export { TopLeadersList };
