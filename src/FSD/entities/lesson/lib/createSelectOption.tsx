import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { TInitialStudentParamForLessonForm } from '../model/loadInitialDataServerAnswer.type';
import { TCreateOptonsUtil } from '../../../shared/types/createOptions.type';

export const createLessonsNameSelectOptions: TCreateOptonsUtil<string, TInitialStudentParamForLessonForm[]> = (data) => {
  return data.map((item) => (
    {
      value: item.name,
      label:
        <>
          <TaskAltIcon
            sx={
              item.activity === 'active'
                ? { color: 'green' }
                : { color: 'red' }
            }
          />
          {item.name}
        </>
    }
  ));
};
