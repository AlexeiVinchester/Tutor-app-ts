import { FullIncomeWrapper } from "./components/FullIncomeWrapper/FullIncomeWrapper";
import { FullAmountWrapper } from "./components/FullAmountWrapper/FullAmountWrapper";
import { FullStudentStatisticsWrapper } from "./components/FullStudentStatisticsWrapper/FullStudentStatisticsWrapper";
import { Container, Typography } from "@mui/material";
import { StatisticsPageHeader } from "../../components/StatisticsPageHeader/StatisticsPageHeader";

const FullStatisticsPage = () => {
    return (
        <>
            <StatisticsPageHeader 
                description="Here you can find statistics for full time: amount of lessons and full income. In the bottom part choose student and find income and amount of lessons for interested student!"
            />
            <div className="flex flex-col h-full pb-10 bg-statistics-back">
                <Container>
                    <Typography
                        variant="h1"
                        component='p'
                        sx={{
                            fontFamily: '"Queens Medium", serif',
                            fontWeight: 500,
                            fontSize: '60px',
                            textAlign: 'center',
                            color: 'rgb(33, 51, 67)',
                            marginTop: '30px',
                            marginBottom: '30px'
                        }}
                    >
                        Full Statistics
                    </Typography>
                    <div className="flex justify-around items-center mb-10">
                        <FullAmountWrapper />
                        <FullIncomeWrapper />
                    </div>
                    <FullStudentStatisticsWrapper />
                </Container>
            </div>
        </>
    );
};

export { FullStatisticsPage };
