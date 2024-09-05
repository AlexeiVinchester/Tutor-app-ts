import { CardContainerProps } from "./interface/cardContainer.interface";
import { Card, Box } from "@mui/material";

const CardContainer = ({ children }: CardContainerProps) => {
    return (
        <Box sx={{ minWidth: 275, width: 300, boxShadow: '0 15px 20px #ABB2B9;' }} >
            <Card variant="outlined">
                {children}
            </Card>
        </Box>
    );
};

export { CardContainer };