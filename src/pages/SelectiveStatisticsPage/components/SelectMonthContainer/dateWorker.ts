const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const YEARS = ['2025', '2024', '2023'];

const getCorrectCurrentMonth = () => {
  const jsMonth = new Date().getMonth();
  return jsMonth + 1 < 10 ? '0' + String(jsMonth + 1) : String(jsMonth + 1);
};

const getValueForMonthOption = (index: number) => {
  return index < 9 ? '0' + (index + 1) : String(index + 1);
};

export { MONTHS, YEARS, getValueForMonthOption, getCorrectCurrentMonth };
