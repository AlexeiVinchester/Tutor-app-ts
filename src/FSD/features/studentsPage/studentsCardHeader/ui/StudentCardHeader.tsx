import { CardHeader, Avatar } from "@mui/material";
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { TStudent } from "../../../../entities/student/model/student.type";
import { useChangeStudentActivity } from "../lib/useChangeStudentActivity";

type TStudentCardHeaderProps = {
  student: TStudent;
};

export const StudentCardHeader = ({ student }: TStudentCardHeaderProps) => {
  const [studentName, studentSurname] = student.name.split(' ');

  const { handleClickChangeActivity, isPendingChangingActivity, studentActivity } = useChangeStudentActivity(student);

  return (
    <CardHeader
      avatar={
        <Avatar
          src={`/assets/${student.gender === 'male' ? 'boy' : 'girl'}.png`}
          className="!w-14 !h-14"
        />
      }
      action={
        <div className="flex gap-1">
          <BoardStyledButton
            icon={TaskAltIcon}
            iconSize="medium"
            toolTipTitle="Change status"
            className={`${studentActivity ? '!text-main-turquoise hover:!text-main-turquoise' : '!text-send-data-button-text hover:!text-send-data-button-text'}  disabled:!text-gray-400`}
            onClick={handleClickChangeActivity}
            disabled={isPendingChangingActivity}
          />
          <BoardStyledButton
            icon={EditIcon}
            iconSize="medium"
            toolTipTitle="Edit profile"
            className="hover:!text-main-turquoise !text-gray-400 disabled:!text-gray-400"
          />
        </div>
      }
      title={
        <p className="text-xl font-bold text-main-orange">{studentName}</p>
      }
      subheader={
        <p className="text-main-turquoise">{studentSurname}</p>
      }
    />
  );
};