import { CardHeader, IconButton } from "@mui/material"
import UpdateIcon from '@mui/icons-material/Update';

type TLessonBoardHeaderProps = {
  updateData: () => void;
}

export const LessonBoardHeader = ({ updateData }: TLessonBoardHeaderProps) => {
  return (
    <CardHeader
      title={
        <h5 className="text-m font-bold flex items-center gap-2">
          Lessons board
        </h5>
      }
      subheader={
        <h5>Lessons for all period of time</h5>
      }
      action={
        <div className="flex items-center">
          <span className="text-main-orange">update</span>
          <IconButton
            size="large"
            className="!text-send-data-button-text disabled:bg-gray-400"
            onClick={updateData}
          >

            <UpdateIcon />
          </IconButton>
        </div>
      }
    />
  );
};