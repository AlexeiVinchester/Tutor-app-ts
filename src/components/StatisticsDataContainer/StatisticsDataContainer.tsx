import React from 'react'
import { InfoCircleContainer } from '../../share/components/InfoCircleContainer/InfoCircleContainer';
import { IStatisticsDataContainerProps } from './interface/StatisticsDataContainer.interface';

const StatisticsDataContainer = React.memo(({ amountLabel, incomeLabel, amount, income }: IStatisticsDataContainerProps) => {
    return (
        <div className="flex justify-around items-center mb-10">
            <InfoCircleContainer label={amountLabel} value={amount} />
            <InfoCircleContainer label={incomeLabel} value={income} />
        </div>
    )
});

export { StatisticsDataContainer } 
