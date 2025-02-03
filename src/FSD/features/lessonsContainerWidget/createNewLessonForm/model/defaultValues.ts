import dayjs from 'dayjs';
import { TSelectOption } from '../../../../shared/types/selectOption';
import { TCreateNewLessonFormServerAnswer } from '../../../../entities/student/api/loadStudentsNames';

export const formDefaultValues = {
  price: '30',
  date: dayjs().format('YYYY-MM-DD'),
  paidStatus: false,
  name: '',
};

export const optionsDefaultValues: TSelectOption[] = [{ name: '', value: '' }];

export const lessonsParamsDefaultValues: TCreateNewLessonFormServerAnswer = { names: [], nextId: 0 };

