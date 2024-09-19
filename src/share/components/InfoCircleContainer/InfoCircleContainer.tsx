import { Box, Card, CardContent } from "@mui/material"
import { InfoCircleContainerProps } from "./interface/InfoCircleContainer.interface";

const InfoCircleContainer = ({ value, label }: InfoCircleContainerProps) => {
    return (
        <Box sx={{
            minWidth: 275,
            width: 300,
            boxShadow: '0 15px 20px #ABB2B9;',
            borderRadius: '22px'
        }} >
            <Card variant="outlined" sx={{ borderRadius: '22px' }}>
                <CardContent>
                    <p className="mb-4 text-center font-semibold text-2xl text-hover-blue">
                        {label}
                    </p>
                    <div className="flex justify-center">
                        <div className="h-[150px] w-[150px] rounded-full p-1">
                            <div className="text-main-turquoise leading-[117px] border-main-turquoise h-full w-full rounded-[50%] border-[10px] border-solid flex flex-col justify-center items-center text-center">
                                <div className="font-normal text-4xl">
                                    {value}
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Box>
    );
};

export { InfoCircleContainer };
