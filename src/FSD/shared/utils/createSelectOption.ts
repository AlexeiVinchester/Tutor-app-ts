import { TStudentParam } from '../../entities/lesson/ui/lessonForm';
import { TSelectOption } from '../types/selectOption.type';

export const createSelectOptions = (data: TStudentParam[]): TSelectOption[] => {
  return data.map((item): TSelectOption => (
    { name: item.name, value: item.name, activity: item.activity }
  ));
};
