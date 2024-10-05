import { Typography } from "@mui/material"
import { IAbsentLessonsMessageProps } from "./interface/AbsentLessonsMessage.interface"

const AbsentLessonsMessage = ({ message }: IAbsentLessonsMessageProps) => {
    return (
        <div className="flex justify-center items-center">
            <Typography sx={{ fontSize: '20px', fontWeight: 500, color: 'rgb(255, 69, 0)' }}>
                {message}
            </Typography>
        </div>
    );
};

export { AbsentLessonsMessage };
