import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { topLeadersCurrentModeSelector, topLeadersCurrentAmountSelector } from "./TopLeadersSelectors";
import { loadTopLeaders } from "../../../../entities/topLeader/api/loaders";
import { TTopLeadersAmount, TTopLeader } from "../../../../entities/topLeader/model/TopLeader.type";

interface ITopLeadersDataContainerProps {
  renderEmptyComponent: () => React.ReactNode;
  renderSceletonComponent: (topLeadersAmount: TTopLeadersAmount) => React.ReactNode;
  renderContentComponent: (topLeaders: TTopLeader[]) => React.ReactNode;
}

const TopLeadersDataContainer = ({
  renderEmptyComponent,
  renderSceletonComponent,
  renderContentComponent,
}:ITopLeadersDataContainerProps ) => {
  const topLeadersMode = useSelector(topLeadersCurrentModeSelector);
  const topLeadersAmount = useSelector(topLeadersCurrentAmountSelector);

  const { data: topLeaders, isLoading, isError } = useQuery({
    queryKey: ["topLeaders", topLeadersAmount, topLeadersMode],
    queryFn: () => loadTopLeaders({ amount: topLeadersAmount, mode: topLeadersMode })
  });

  if (isLoading) return renderSceletonComponent(topLeadersAmount);

  if(isError || !topLeaders?.length) return renderEmptyComponent();

  return renderContentComponent(topLeaders);
};
TopLeadersDataContainer.displayName = "TopLeadersDataContainer";

export { TopLeadersDataContainer };