import { useQuery } from "@tanstack/react-query";
import { loadGenderActivity } from "../../../../entities/student/api/loaders";
import { Button, Card, CardContent } from "@mui/material";
import { PageHeaderWrapper } from "../../../../shared/ui/PageHeaderWrapper/PageHeaderWrapper";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { GenderAmountBox } from "./GenderAmountBox";
import { imagesPaths } from "../model/paths";

export const StudentsPageHeader = () => {
  const { data: genderActivity, isError, isLoading } = useQuery({
    queryKey: ['studentsGenderActivity'],
    queryFn: () => loadGenderActivity()
  });

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
      <div className="flex-col gap-2">
        <div className="mb-1">
          <Card variant="outlined" className="!rounded-[22px]">
            <CardContent>
              <p className="font-['Lexend Deca'] font-normal text-[18px] text-[rgb(33, 51, 67)]">
                For all period of time you have{' '}
                <span className="text-main-turquoise text-lg">
                  {genderActivity?.totalAmount}
                </span>{' '}
                students
              </p>
              <div className="flex items-center">
                <TaskAltIcon color="success" />
                Active now:
                <span className="text-main-turquoise ml-1 text-lg">
                  {genderActivity?.activeAmount}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="flex gap-1">
          <GenderAmountBox
            amount={genderActivity?.boysAmount}
            imagePath={imagesPaths.boy}
            isLoading={isLoading}
            isError={isError}
          />
          <GenderAmountBox
            amount={genderActivity?.girlsAmount}
            imagePath={imagesPaths.girl}
            isLoading={isLoading}
            isError={isError}
          />
        </div>
      </div>
    </PageHeaderWrapper>
  );
};