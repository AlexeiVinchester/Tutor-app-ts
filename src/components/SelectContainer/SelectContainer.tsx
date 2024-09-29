import { SelectContainerProps } from "./interface/SelectContainer.interface";

const SelectContainer = ({ onChange, data }: SelectContainerProps) => {
    return (
        <div className="flex justify-center items-center">
            <select
                className="rounded-[22px] p-3 border-2 hover:border-amount-of-students focus:border-none bg-back-side-statistics text-white border-main-turquoise"
                defaultValue={data[0]}
                onChange={onChange}
            >
                {
                    data.map((name) => (
                        <option key={name}>
                            {name}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export { SelectContainer }; 