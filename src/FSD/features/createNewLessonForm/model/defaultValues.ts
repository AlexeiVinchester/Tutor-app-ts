import dayjs from 'dayjs';

export const defaultValues = {
  price: '30',
  date: dayjs().format('YYYY-MM-DD'),
  paidStatus: false,
  name: '',
};
