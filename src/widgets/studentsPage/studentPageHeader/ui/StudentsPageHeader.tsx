import { Button } from "@mui/material";
import { StudentActivityBox } from "./StudentActivityBox";
import { PageHeaderWrapper } from "../../../../shared/ui/PageHeaderWrapper/PageHeaderWrapper";

export const StudentsPageHeader = () => {
  return (
    <PageHeaderWrapper heightInPx={460}>
      <div className="w-1/2">
        <p className="font-['Lexend Deca'] font-normal text-[18px] text-[rgb(33, 51, 67)]">
          MY TUTOR PLATFORM
        </p>
        <p className="leading-tight font-['Queens_Medium_serif'] font-medium text-[60px] text-[rgb(33,51,67)]">
          Grow better with My Tutor
        </p>
        <p className="font-['Lexend Deca'] font-light text-[16px] text-[rgb(33, 51, 67)] my-[10px]">
          At this page you can find all information about students for all
          period of time. With powerfull My Tutor application you can keep
          track of students, fiil in info about them ans so on. For other
          information press "Learn more about app"
        </p>
        <Button
          variant="contained"
          className="!p-4 !rounded-[15px] !bg-main-orange hover:!bg-main-turquoise !text-white"
        >
          Learn more about app
        </Button>
      </div>
      <StudentActivityBox />
    </PageHeaderWrapper>
  );
};