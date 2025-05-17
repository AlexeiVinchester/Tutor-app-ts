import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { TInitialStudentParamForLessonForm } from '../model/api.types';
import { TCreateOptonsUtil } from '../../../shared/types/createOptions.type';

export const createLessonsNameSelectOptions: TCreateOptonsUtil<string, TInitialStudentParamForLessonForm[]> = (data) => {
  return data.map((item) => (
    {
      value: item.name,
      label:
        <>
          <TaskAltIcon
            sx={
              item.activity 
                ? { color: 'green' }
                : { color: 'red' }
            }
          />
          {item.name}
        </>
    }
  ));
};
