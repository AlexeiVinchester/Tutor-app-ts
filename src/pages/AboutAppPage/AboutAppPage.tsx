import { Student } from "../../share/interfaces/student.interface";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { Alert, Container, Snackbar } from "@mui/material";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import { useFetch } from "../../hooks/useFetch";
import { useSendRequest } from "../../hooks/usePostRequest";
import { useSnackMessage } from "../../hooks/useSnackMessage";


const AboutAppPage = () => {
    const { isLoading: isLoadingLessons, sendRequest } = useSendRequest<ILesson>();
    const { isOpenSnackBar, showSnackBar, closeSnackBar, severity, message } = useSnackMessage();

    const handleClickAddNewLesson = async () => {
        const { status, error } = await sendRequest('http://localhost:3002/addLesson', 'POST', {
            "id": 296,
            "name": "test",
            "price": 30,
            "date": "2024-09-27",
            "paidStatus": false
        });
        if (!status) {
            showSnackBar(`Failed to send data: ${error}`, 'error')
        } else {
            showSnackBar('Data was added Succesfully!', 'success')
        }
    }

    const {
        data: hookLessons,
        isLoading: ishookLessonsLoading,
        error: errorHoohLessons
    } = useFetch<ILesson>('http://localhost:3002/getLessons');

    const {
        data: hookStudents,
        isLoading: isHookStudentsLoading,
        error: errorHookStudents
    } = useFetch<Student>('http://localhost:3002/getStudents');

    return (
        <div className="flex flex-row justify-around items-start">
            <div>
                {isHookStudentsLoading && <h1>Loading students...</h1>}
                {errorHookStudents && <h1>{errorHookStudents}</h1>}
                {hookStudents[0] && <>
                    {hookStudents.map(student => (<div key={student.id}>{student.name}</div>))}
                </>}
            </div>
            <div>
                <Container sx={{ paddingTop: '50px' }} maxWidth='md'>
                    {ishookLessonsLoading && <h1>Loading hook lessons...</h1>}
                    {errorHoohLessons && <h1>{errorHoohLessons}</h1>}
                    {hookLessons[0] && <TableOfLessons lessons={hookLessons} />}
                </Container>
            </div>

            <button
                onClick={handleClickAddNewLesson}
                disabled={isLoadingLessons}
            >
                {isLoadingLessons ? 'Sending...' : 'Send POST Request'}
            </button>
            {
                <Snackbar
                    open={isOpenSnackBar}
                    autoHideDuration={6000}
                    onClose={closeSnackBar}
                >
                    <Alert onClose={closeSnackBar} severity={severity} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
            }
        </div>

    );
};

export { AboutAppPage };
