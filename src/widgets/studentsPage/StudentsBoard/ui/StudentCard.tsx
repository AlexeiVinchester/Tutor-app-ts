import { Card, CardContent } from "@mui/material";
import { TStudent } from "../../../../entities/student/model/student.type"
import PhoneIcon from '@mui/icons-material/Phone';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import PaymentIcon from '@mui/icons-material/Payment';
import SchoolIcon from '@mui/icons-material/School';
import { StudentInfoSection } from "./StudentInfoSection";
import { StudentCardHeader } from "../../../../features/studentsPage/studentsBoardWidget/studentsCardHeader/ui/StudentCardHeader";

type TStudentCardProps = {
  student: TStudent;
};

export const StudentCard = ({ student }: TStudentCardProps) => {
  return (
    <Card
      variant="outlined"
      className="!w-[370px] !min-h-[230px] !min-w-[350px] !shadow-[0_5px_20px_#ABB2B9] !rounded-[22px]"
    >
      <StudentCardHeader student={student} />
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