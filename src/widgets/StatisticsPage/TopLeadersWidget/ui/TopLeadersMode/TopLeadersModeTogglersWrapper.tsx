import { TOP_LEADERS_MODE_VARIANTS } from "../../../../../entities/topLeader/model/TopLeader.type";
import { TopLeaderModeToggler } from "./TopLeaderModeToggler";
import classes from "./TopLeadersModeToggler.module.css";

const TopLeaderModeTogglersWrapper = () => (
  <div className={classes.toggleWrapper}>
    {TOP_LEADERS_MODE_VARIANTS.map(
      (mode) => <TopLeaderModeToggler mode={mode} key={mode} />
    )}
  </div>
);
TopLeaderModeTogglersWrapper.displayName = "TopLeaderModeTogglesrWrapper";

export { TopLeaderModeTogglersWrapper };