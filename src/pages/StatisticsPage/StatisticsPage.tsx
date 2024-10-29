import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FULL_STATISTICS, SELECTIVE_STATISTICS, } from "../../Router/routes";
import { ContainedButton } from "../../share/components/ContainedButton/ContainedButton";
import { PageHeaderWrapper } from "../../components/PageHeaderWrapper/PageHeaderWrapper";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { useEffect } from "react";
import { loadAllLessons } from "../../redux/slices/lessonsSlice/lessonsSlice";

const StatisticsPage = () => {
    const navigate = useNavigate();

    const useThunkDispatch = () => useDispatch<AppDispatch>();

    const thunkDispatch = useThunkDispatch();
    useEffect(() => {
        thunkDispatch(loadAllLessons('http://localhost:3002/getLessons'))
    }, [thunkDispatch]);

    const onClickFullStatisticsHandler = () => {
        navigate(FULL_STATISTICS);
    };

    const onClickSelectiveStatisticsHandler = () => {
        navigate(SELECTIVE_STATISTICS)
    };

    return (
        <PageHeaderWrapper heightInPx={370}>
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
                    Fill in all your lessons and follow the statistics with My Tutor
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
                    It's very helpful in analysing your efficiency to follow your statistics for different periods
                    of time. Here you can choose what you want to track. For detail information choose corresponding way.
                </Typography>
                <div className="flex justify-center">
                    <ContainedButton
                        onClick={onClickFullStatisticsHandler}
                        value="Full statistics"
                    />
                    <ContainedButton
                        onClick={onClickSelectiveStatisticsHandler}
                        value="Selective statistics"
                    />
                </div>
            </div>
        </PageHeaderWrapper>
    );
};

export { StatisticsPage };
