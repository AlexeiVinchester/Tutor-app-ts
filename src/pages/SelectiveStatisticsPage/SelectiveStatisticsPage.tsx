import { Container, Typography } from "@mui/material";

const SelectiveStatisticsPage = () => {
    return (
        <div className="w-full bg-bg-info h-[220px]">
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
                                Here you can find selective statistics for choosed year, month and student. In the top choose date and student and find income and amount of lessons for interested student!
                            </Typography>
                        </div>
                    </div>
                </Container>
            </div>
    );
};

export { SelectiveStatisticsPage } 
