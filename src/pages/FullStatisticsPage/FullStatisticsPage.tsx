import { FullIncomeWrapper } from "./components/FullIncomeWrapper/FullIncomeWrapper";
import { FullAmountWrapper } from "./components/FullAmountWrapper/FullAmountWrapper";
import { FullStudentStatisticsWrapper } from "./components/FullStudentStatisticsWrapper/FullStudentStatisticsWrapper";
import { Container, Typography } from "@mui/material";

const FullStatisticsPage = () => {
    return (
        <>
            <div className="w-full bg-bg-info h-[200px]">
                <Container >
                    <div className="flex flex-col items-center justify-between pt-10 sm:flex-row">
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
                                Here you can find statistics for full time. In the bottom part choose student and find income and amount of lessons for interested student!
                            </Typography>
                        </div>
                    </div>
                </Container>
            </div>
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
