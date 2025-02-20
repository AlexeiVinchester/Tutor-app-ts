import { TInitialStudentParamForLessonForm } from '../../entities/lesson/model/loadInitialDataServerAnswer.type';
import { TSelectOption } from '../types/selectOption.type';

export const createSelectOptions = (data: TInitialStudentParamForLessonForm[]): TSelectOption[] => {
  return data.map((item): TSelectOption => (
    { name: item.name, value: item.name, activity: item.activity }
  ));
};
