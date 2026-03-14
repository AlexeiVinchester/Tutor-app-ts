import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import classes from "./TopLeadersCard.module.css";
import { TTopLeadersMode } from "../../../../../entities/topLeader/model/TopLeader.type";

interface ITopAmountLeaderCardProps {
  name: string;
  surname: string;
  criteriaValue: number;
  position: number;
  mode?: TTopLeadersMode;
}

const TopLeaderCard = ({ name, surname, criteriaValue, position, mode = "amount" }: ITopAmountLeaderCardProps) => {
  return (
    <div className={classes.topLeaderCardWrapper}>
      <div>{position}{"."}</div>
      <div className={classes.avatarWrapper}>
        <img src={"../../../../../../public/assets/boy.png"} alt="top amount leader" />
      </div>
      <div className={classes.leaderNameContainer}>
        <div className={classes.leaderName}>{name}</div>
        <div className={classes.leaderSurname}>{surname}</div>
      </div>
      <div className={classes.leaderCryteriaValueBlock}>
        {criteriaValue}
        {mode === "income" ? <span className={classes.incomeCurrency}>BYN</span> : null}
      </div>

      <div className={classes.fullInfoButton}>
        <ArrowForwardIcon fontSize="small" />
      </div>
    </div>
  );
};
TopLeaderCard.displayName = "TopLeaderCard";

export { TopLeaderCard }