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
    'December'
];

const getValueForMonthOption = (index: number) => {
    return index < 10 ? '0' + (index+1) : String(index+1)
};

export { MONTHS, getValueForMonthOption };