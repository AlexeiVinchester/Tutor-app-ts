import { useCallback } from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { IWithTopLeadersMode } from "../../../../../entities/topLeader/model/TopLeader.type";
import { topLeadersCurrentModeSelector } from "../../model/TopLeadersSelectors";
import { toggleTopLeadersMode } from "../../model/TopLeadersSlice";
import classes from "./TopLeadersModeToggler.module.css";

const TopLeaderModeToggler = ({ mode }: IWithTopLeadersMode) => {
  const topLeadersCurrentMode = useSelector(topLeadersCurrentModeSelector);
  const dispatch = useDispatch();

  const handleToggleMode = useCallback(
    () => {
      dispatch(toggleTopLeadersMode(mode));
    },
    [mode, dispatch]
  );

  return (
    <div
      className={clsx(classes.toggleButton, mode === topLeadersCurrentMode && classes.activeToggleButton)}
      onClick={handleToggleMode}
    >
      {mode}
    </div>
  );
};
TopLeaderModeToggler.displayName = "TopLeaderModeToggler";

export { TopLeaderModeToggler };