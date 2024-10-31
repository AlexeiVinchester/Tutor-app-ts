import { StatisticsPageHeader } from "../../components/StatisticsPageHeader/StatisticsPageHeader";
import { StatisticsMainWrapper } from "../../components/StatisticsMainWrapper/StatisticsMainWrapper";
import { StatisticsTopText } from "../../components/StatisticsTopText/StatisticsTopText";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { SelectContainer } from "../../components/SelectContainer/SelectContainer";
import { FullStatisticsDataContainer } from "./components/FullStatisticsDataContainer/FullStatisticsDataContainer";
import { showSnackMessage } from "../../redux/slices/snackMessageSlice/snackMessageSlice";
import { createSnackMessage } from "../../utils/createSnackMessage";

const FullStatisticsPage = () => {
    const [studentsNames, setStudentsNames] = useState<string[]>(['']);
    const [studentName, setStudentName] = useState(studentsNames[0]);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3002/getStudentsNames`);
                const data = await response.json();
                setStudentsNames(data);
                setStudentName(data[0]);
            } catch (error) {
                if (error instanceof Error) {
                    dispatch(showSnackMessage(createSnackMessage(
                        `Error while loading students names: ${error.message}!`,
                        'error'
                    )));
                } else {
                    dispatch(showSnackMessage(createSnackMessage(
                        `Error while loading students names: unknown error!`,
                        'error'
                    )));
                }
            }
        };
        fetchData();
    }, [dispatch]);

    const onselectStudentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStudentName(e.target.value);
    };

    return (
        <>
            <StatisticsPageHeader
                description="Here you can find statistics for full time: amount of lessons and full income. In the bottom part choose student and find income and amount of lessons for interested student!"
            />
            <StatisticsMainWrapper>
                <StatisticsTopText value="Full Statistics" />
                <SelectContainer
                    data={studentsNames}
                    onChange={onselectStudentChange}
                />
                <FullStatisticsDataContainer studentName={studentName} />
            </StatisticsMainWrapper>
        </>
    );
};

export { FullStatisticsPage };
