import dayjs from 'dayjs';
import { TSelectOption } from '../../../../shared/types/selectOption.type';

export const formDefaultValues = {
  price: '30',
  date: dayjs().format('YYYY-MM-DD'),
  paidStatus: false,
  name: '',
};

export const optionsDefaultValues: TSelectOption<string>[] = [{ label: '', value: ''}];

