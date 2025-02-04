import dayjs from 'dayjs';
import { TSelectOption } from '../../../../shared/types/selectOption';
import { TLoadInitialDataServerAnswer } from './api.types';

export const formDefaultValues = {
  price: '30',
  date: dayjs().format('YYYY-MM-DD'),
  paidStatus: false,
  name: '',
};

export const optionsDefaultValues: TSelectOption[] = [{ name: '', value: '' }];

export const lessonsParamsDefaultValues: TLoadInitialDataServerAnswer = { names: [], nextId: 0 };

