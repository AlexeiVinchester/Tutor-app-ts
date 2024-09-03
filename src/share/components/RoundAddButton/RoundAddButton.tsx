import { RoundAddButtonProps } from "./interface/RoundAddButton.interface";

const RoundAddButton = ({ openHandler }: RoundAddButtonProps) => {
    return (
        <button
            className="rounded-full fixed right-5 bottom-5 bg-blue-400 text-2xl text-white px-4 py-2"
            onClick={openHandler}
        >
            +
        </button>
    );
};

export { RoundAddButton };
