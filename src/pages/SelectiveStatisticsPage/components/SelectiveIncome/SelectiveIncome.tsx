import { ISelectiveDateParams } from '../../../../share/interfaces/selectiveStatisticsParams.interface'
import { useSelector } from 'react-redux'
import { memoSelectFullIncomeForMonthAndYear } from '../../../../redux/selectors/lessonsSelectors'
import { InfoCircleContainer } from '../../../../share/components/InfoCircleContainer/InfoCircleContainer'

const SelectiveIncome = ({ year, month }: ISelectiveDateParams) => {
    const fullIncomePerMonthAndYear = useSelector((state) => memoSelectFullIncomeForMonthAndYear(state, year, month))

    return (
        <InfoCircleContainer
            value={fullIncomePerMonthAndYear}
            label='Full income'
        />
    );
};

export { SelectiveIncome } 
