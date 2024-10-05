import { getValueForMonthOption } from "./dateWorker";
import { SelectMonthContainerProps } from "./interface/SelectMonthContainer.interface";

const SelectMonthContainer = ({ onChange, data, value }: SelectMonthContainerProps ) => {
    
    return (
        <div className="flex justify-center items-center">
            <select
                className="rounded-[22px] p-3 border-2 hover:border-amount-of-students focus:border-none bg-back-side-statistics text-white border-main-turquoise"
                onChange={onChange}
                value={value}
            >
                {
                    data.map((name, index) => {
                        return (
                        <option key={name} value={getValueForMonthOption(index)}>
                            {name}
                        </option>
                    )})
                }
            </select>
        </div>
    );
};

export { SelectMonthContainer }