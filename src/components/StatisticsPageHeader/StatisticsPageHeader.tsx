import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { STATISTICS } from "../../Router/routes";
import { ContainedButton } from "../../share/components/ContainedButton/ContainedButton";
import { StatisticsPageHeaderProps } from "./interface/StatisticsPageHeader.interface";
import { PageHeaderWrapper } from "../PageHeaderWrapper/PageHeaderWrapper";

const StatisticsPageHeader = ({ description }: StatisticsPageHeaderProps) => {
    const navigate = useNavigate();
    const handleCLickBackToGeneralStatisticPage = () => {
        navigate(STATISTICS);
    }
    return (
        <PageHeaderWrapper heightInPx={280}>
            <div className="w-full">
                <Typography
                    sx={{
                        fontFamily: '"Lexend Deca", sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        color: 'rgb(33, 51, 67)'
                    }}
                >
                    MY TUTOR PLATFORM
                </Typography>
                <Typography
                    variant="h1"
                    component='p'
                    sx={{
                        fontFamily: '"Queens Medium", serif',
                        fontWeight: 500,
                        fontSize: '60px',
                        color: 'rgb(33, 51, 67)'
                    }}
                >
                    You are nobody without Statistics
                </Typography>
                <Typography
                    sx={{
                        fontFamily: '"Lexend Deca", sans-serif',
                        fontWeight: 300,
                        fontSize: '16px',
                        color: 'rgb(33, 51, 67)',
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}
                >
                    {description}
                </Typography>
                <div className="flex justify-center items-center">
                    <ContainedButton
                        onClick={handleCLickBackToGeneralStatisticPage}
                        value="Back to general statistic page"
                    />
                </div>
            </div>
        </PageHeaderWrapper>
    );
};

export { StatisticsPageHeader };