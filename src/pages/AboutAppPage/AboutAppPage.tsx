import { Student } from "../../share/interfaces/student.interface";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { Container } from "@mui/material";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";
import { useFetch } from "../../hooks/useFetch";


const AboutAppPage = () => {

    const handleClickAffNewLesson = () => {
        fetch('http://localhost:3002/addLesson', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": 295,
                "name": "test",
                "price": 30,
                "date": "2024-09-27",
                "paidStatus": false
            })
        })
    }

    const {
        data: hookLessons, 
        isLoading: ishookLessonsLoading,
        error: errorHoohLessons 
    } =  useFetch<ILesson>('http://localhost:3002/getLessons');

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
            <div>
                <button onClick={handleClickAffNewLesson}>Add new Lesson</button>
            </div>
        </div>

    );
};

export { AboutAppPage };
