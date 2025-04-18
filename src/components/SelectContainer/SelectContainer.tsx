import React from 'react';
import { SelectContainerProps } from './interface/SelectContainer.interface';

const SelectContainer = React.memo(
  ({ onChange, data, value, initialOption }: SelectContainerProps) => {
    return (
      <div className="flex justify-center items-center">
        <select
          className="rounded-[22px] p-3 border-2 hover:border-amount-of-students focus:border-none bg-back-side-statistics text-white border-main-turquoise"
          onChange={onChange}
          value={value}
        >
          <option disabled value="">
            {initialOption}
          </option>
          {data.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </div>
    );
  }
);

export { SelectContainer };
