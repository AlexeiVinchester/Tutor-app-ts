import { CardHeader, Avatar } from "@mui/material";
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { TStudent } from "../../../../entities/student/model/student.type";

type TStudentCardHeaderProps = {
  student: TStudent;
}

export const StudentCardHeader = ({ student }: TStudentCardHeaderProps) => {

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
            className={`${student.status ? '!text-main-turquoise hover:!text-main-turquoise' : '!text-send-data-button-text hover:!text-send-data-button-text'}  disabled:!text-gray-400`}
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
        <p className="text-xl font-bold text-main-orange">{student.name}</p>
      }
      subheader={
        <p className="text-main-turquoise">{student.form + ' form'}</p>
      }
    />
  );
}