import { TopLeadersAmountSelect } from "./TopLeadersAmount/TopLeaadersAmountSelect";
import { TopLeadersList } from "./TopLeadersList/TopLeadersList";
import { TopLeaderModeTogglersWrapper } from "./TopLeadersMode/TopLeadersModeTogglersWrapper";
import classes from "./TopLeadersWidget.module.css";

const TopLeadersWidget = () => {
  return (
    <div className={classes.topLeadersWigdet}>
      <div className={classes.topLeadersWidgetHeader}>
        <div className={classes.topLeadersWidgetTitle}>Top Leaders</div>
        <TopLeadersAmountSelect />
      </div>

      <TopLeaderModeTogglersWrapper />
      <TopLeadersList />
    </div>
  );
};

export { TopLeadersWidget };
