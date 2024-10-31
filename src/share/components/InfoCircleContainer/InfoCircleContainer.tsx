import { Box, Card, CardContent } from "@mui/material"
import { InfoCircleContainerProps } from "./interface/InfoCircleContainer.interface";
import React from "react";

const InfoCircleContainer = React.memo(({ value, label }: InfoCircleContainerProps) => {
    return (
        <Box sx={{
            minWidth: 275,
            width: 300,
            borderRadius: '22px',
            boxShadow: '0 15px 20px #ABB2B9;',
        }} >
            <Card variant="outlined" sx={{ borderRadius: '22px', background: 'rgb(25, 39, 51)' }}>
                <CardContent>
                    <p className="mb-4 text-center font-semibold text-2xl text-white">
                        {label}
                    </p>
                    <div className="flex justify-center">
                        <div className="h-[150px] w-[150px] rounded-full p-1">
                            <div className="text-main-orange leading-[117px] border-main-turquoise h-full w-full rounded-[50%] border-[10px] border-solid flex flex-col justify-center items-center text-center">
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
});

export { InfoCircleContainer };
