import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Card, CardContent } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { GenderAmountBox } from "./GenderAmountBox";
import { imagesPaths } from "../model/paths";
import { loadGenderActivity } from "../../../../entities/student/api/loaders";

export const StudentActivityBox = () => {
  const { data: genderActivity, isError, isLoading } = useQuery({
    queryKey: ['studentsGenderActivity'],
    queryFn: () => loadGenderActivity()
  });

  return (
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
            <div className="flex items-center gap-1">
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
  );
};