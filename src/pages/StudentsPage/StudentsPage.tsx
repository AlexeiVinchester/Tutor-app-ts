import { useSelector } from "react-redux";
import { Store } from "../../redux/store/interface/store.interface";
import { Button, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from "@mui/material";
import { StudentsList } from "./components/StudentsList/StudentsList";
import { useContext, useState } from "react";
import { ModalWindowContext } from "../../context/modalWindow/ModalWindowProvider";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { AddNewStudentContainer } from "./components/AddNewStudentContainer/AddNewStudentContainer";
import { SnackMessage } from "../../share/components/SnackMessage/SnackMessage";
import { EditMessageContext } from "../../context/EditMessage/EditMessageProvider";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ABOUT } from "../../Router/routes";
import { femaleImage, maleImage } from "./components/StudentCard/assets/links";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const StudentsPage = () => {
    const students = useSelector((state: Store) => state.students);
    const amountOfActiveStudents = students.filter((student) => student.status === 'active').length;
    const boys = students.filter((student) => student.gender === 'male');
    const girls = students.filter((student) => student.gender === 'female');
    const { modalState, close, open } = useContext(ModalWindowContext);
    const { isEditMessageOpen, closeEditMessage } = useContext(EditMessageContext)
    const [isAddMessageOpen, setIsAddMessageOpen] = useState(false);

    const navigate = useNavigate();

    const openAddMessage = () => setIsAddMessageOpen(true);
    const closeAddMessage = () => setIsAddMessageOpen(false);

    const [filteredStudents, setFilteredStudents] = useState(students)
    const onSearchHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFilteredStudents(students.filter((student) => student.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())));
    }

    const onClickLearnMoreAboutAppHandler = () => {
        navigate(ABOUT)
    }

    return (
        <>
            <div className="w-full bg-bg-info h-[400px]">
                <Container >
                    <div className="flex flex-col items-center justify-between pt-10 sm:flex-row">
                        <div className="w-1/2">
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
                                Grow better with My Tutor
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
                                At this page you can find all information about students for all period of time.
                                With powerfull My Tutor application you can keep track of students, fiil in info about them ans so on.
                                For other information press "Learn more about app"
                            </Typography>
                            <Button
                                onClick={onClickLearnMoreAboutAppHandler}
                                variant="contained"
                                sx={{
                                    borderRadius: '15px',
                                    bgcolor: 'rgb(255, 92, 53)',
                                    padding: '16px',
                                    color: 'white',
                                    ":hover": {
                                        bgcolor: 'rgb(80, 201, 173)'
                                    }
                                }}
                            >
                                Learn more about app
                            </Button>
                        </div>
                        <div className="flex-col gap-2">
                            <div className="mb-1">
                                <Card variant="outlined" sx={{ borderRadius: '22px' }}>
                                    <CardContent>
                                        <Typography
                                            sx={{
                                                fontFamily: '"Lexend Deca", sans-serif',
                                                fontWeight: 400,
                                                fontSize: '18px',
                                                color: 'rgb(33, 51, 67)'
                                            }}
                                        >
                                            For all period of time you have <span className="text-main-turquoise text-lg">{students.length}</span> students
                                        </Typography>
                                        <Typography component='div'>
                                            <div className="flex items-center">
                                                <TaskAltIcon color="success" />
                                                Active now:
                                                <span className="text-main-turquoise ml-1 text-lg">{amountOfActiveStudents}</span>
                                            </div>

                                        </Typography>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="flex gap-1">
                                <Card variant="outlined" sx={{ borderRadius: '22px', width: 200, position: 'relative' }} >
                                    <span className="absolute left-3 top-2 text-2xl text-main-orange">
                                        {boys.length}
                                    </span>
                                    <CardMedia
                                        component='img'
                                        sx={{ height: 200 }}
                                        image={maleImage}
                                        alt='boys'
                                    />

                                </Card>
                                <Card variant="outlined" sx={{ borderRadius: '22px', width: 200, position: 'relative' }}>
                                    <span className="absolute left-3 top-2 text-2xl text-main-orange">
                                        {girls.length}
                                    </span>
                                    <CardMedia
                                        component='img'
                                        sx={{ height: 200 }}
                                        image={femaleImage}
                                        alt='girls'
                                    />
                                </Card>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Container sx={{ mt: '1rem', mb: '5rem'}} >
                <div className="flex justify-center items-center mb-8">
                    <input
                        className="w-[60%] rounded-[22px] p-3 border-2 hover:border-amount-of-students focus:border-none"
                        type="search"
                        placeholder="Try to find student..."
                        onChange={onSearchHandler}
                    />
                    <IconButton
                        sx={{
                            color: 'rgb(255, 69, 0)', 
                            ":hover": {
                                bgcolor: 'rgb(80, 201, 173)',
                                color: 'white'
                            }
                        }}
                        onClick={open}
                    >
                        <PersonAddIcon fontSize="large" />
                    </IconButton>
                </div>
                <Grid container spacing={2} className="mb-4" sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <StudentsList students={filteredStudents} />
                </Grid>
                <ModalWindow
                    title="Create new student"
                    onClose={close}
                    modalState={modalState}
                >
                    <AddNewStudentContainer openSnackHandler={openAddMessage} />
                </ModalWindow>
                <SnackMessage
                    isOpen={isAddMessageOpen}
                    onCLose={closeAddMessage}
                    status="success"
                    message="New student was added!"
                />
                <SnackMessage
                    isOpen={!!isEditMessageOpen}
                    onCLose={closeEditMessage}
                    status="success"
                    message={isEditMessageOpen}
                />
            </Container>
        </>
    );
};

export { StudentsPage };
