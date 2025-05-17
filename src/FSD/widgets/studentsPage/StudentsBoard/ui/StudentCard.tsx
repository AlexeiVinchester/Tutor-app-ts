import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import { TStudent } from "../../../../entities/student/model/student.type"
import EditIcon from '@mui/icons-material/Edit';
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";
import PhoneIcon from '@mui/icons-material/Phone';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import PaymentIcon from '@mui/icons-material/Payment';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import SchoolIcon from '@mui/icons-material/School';
import { StudentInfoSection } from "./StudentInfoSection";

type TStudentCardProps = {
  student: TStudent;
};

export const StudentCard = ({ student }: TStudentCardProps) => {
  const { name } = student;
  const [studentName, studentSurname] = name.split(' ');
  return (
    <Card
      variant="outlined"
      className="!w-[370px] !min-h-[230px] !min-w-[350px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
    >
      <CardHeader
        avatar={
          <Avatar
            src={`/assets/${student.gender === 'male' ? 'boy' : 'girl'}.png`}
            className="!w-14 !h-14"
          />
        }
        action={
          <div className="flex gap-1 items-center justify-center">
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
        title={<p className="text-xl font-bold text-main-orange">{studentName}</p>}
        subheader={<p className="text-main-turquoise">{studentSurname}</p>}
      />
      <CardContent className="!py-0">
        <StudentInfoSection label={student.price + ' BYN'}><PaymentIcon /></StudentInfoSection>
        <StudentInfoSection label={student.form + ' form'}><SchoolIcon /></StudentInfoSection>
        <StudentInfoSection label={student.parentsName}><EscalatorWarningIcon /></StudentInfoSection>
        <StudentInfoSection label={student.parentsMobilePhone}><ContactPhoneIcon /></StudentInfoSection>
        <StudentInfoSection label={student.ownMobilePhone || '---------------------'}><PhoneIcon /></StudentInfoSection>
      </CardContent>
    </Card>
  );
};