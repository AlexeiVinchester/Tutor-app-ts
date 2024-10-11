import { CircularProgress } from "@mui/material"

const Spinner = () => {
    return (
        <div className="flex items-center justify-center inset-x-0 inset-y-0 absolute">
            <CircularProgress color="warning" />
        </div>
    );
};

export { Spinner };
