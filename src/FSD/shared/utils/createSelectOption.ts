import { TSelectOption } from '../types/selectOption.type';

export const createSelectOptions = (data: string[]): TSelectOption[] => {
  return data.map((item) => ({ name: item, value: item }));
};
