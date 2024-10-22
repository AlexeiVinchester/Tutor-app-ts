import { useEffect, useState } from "react";
import axios from "axios";
import { Student } from "../../share/interfaces/student.interface";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { Container } from "@mui/material";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";

const getLessonsFromApi = async () => {
    const response = await fetch('http://localhost:3002/getLessons');
    const data = await response.json();
    return data;
}

const AboutAppPage = () => {
    const [users, setUsers] = useState<Student[]>([])
    const [lessons, setLessons] = useState<ILesson[]>([]);
    useEffect(() => {
        axios.get('http://localhost:3002/getStudents')
            .then(users => {
                console.log(users.data)
                setUsers(users.data)
            })
            .catch(err => console.log('Error while get users! ', err))
    }, []);

    useEffect(() => {
        getLessonsFromApi()
            .then(res => setLessons(res))
            .catch(err => console.log(`Error while fetching lessons! Error: ${err.message}`))
    }, []);

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

    // const handleClickUpdateSingleLesson = (_id: string, id: number) => {
    //     fetch(`http://localhost:3002/updateSingleLesson/${_id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             _id,
    //             id,
    //             name: "updateTest",
    //             price: 40,
    //             date: "Update-date",
    //             paidStatus: true
    //         })
    //     })
    // }
    
    return (
        <div className="flex flex-row justify-around items-start">
            <div>
                {
                    users.map(user => (
                        <p key={user.id}>{user.gender}</p>
                    ))
                }
            </div>
            <div>
                <Container sx={{ paddingTop: '50px' }} maxWidth='md'>
                    <TableOfLessons lessons={lessons} />
                </Container>
            </div>
            <div>
                <button onClick={handleClickAffNewLesson}>Add new Lesson</button>
            </div>
        </div>

    );
};

export { AboutAppPage };
