import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../redux/store/interface/store.interface";
import { Button, Card, CardActions, CardContent, Container, Dialog, Grid, IconButton, TextField, Typography } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { useState } from "react";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { addNewLesson } from "../../redux/slices/lessonsSlice/lessonsSlice";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
import { TableOfLessons } from "../../components/TableOfLessons/TableOfLessons";

const LessonsPage = () => {
    const dispatch = useDispatch();
    const lessons = useSelector((store: Store) => store.lessons);
    const [isOpenCreateLessonWindow, setIsOpenCreateLessonWindow] = useState(false);
    const openCreateLessonWindow = () => setIsOpenCreateLessonWindow(true);
    const closeCreateLessonWindow = () => setIsOpenCreateLessonWindow(false);


    const navigate = useNavigate();

    const onClickEditHandler = (lesson: ILesson) => {
        navigate(`/lessons/${lesson.id}/edit`, {state: {lesson}})
    };

    const [lesson, setLesson] = useState<ILesson>({
        id: 0,
        name: '',
        price: 0,
        date: '',
        paidStatus: false
    });

    const onClickSaveHandler = () => {
        dispatch(addNewLesson(lesson));
    };

    const onChangeTextFieldHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLesson((prev: ILesson) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });
    };

    return (
        <div>
            <Container sx={{ marginTop: '50px' }} maxWidth='md'>
                <TableOfLessons lessons={lessons} editLesson={onClickEditHandler}/>
            </Container>
            <Dialog open={isOpenCreateLessonWindow} onClose={closeCreateLessonWindow}>
                <IconButton sx={{ position: 'absolute', right: '5px', top: '5px' }} onClick={closeCreateLessonWindow} ><CloseIcon /></IconButton>
                <Card sx={{ maxWidth: 500, margin: ' 0 auto', padding: '10px 5px', boxShadow: '0 15px 20px #ABB2B9;', backgroundColor: '#f7f5f5f9' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5">Create student card</Typography>
                        <Typography sx={{ mb: '15px' }} color="textSecondary" variant='body2' component='p'>
                            Fill in the form with new values
                        </Typography>
                        <form>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        type="text"
                                        variant="outlined"
                                        placeholder="id of lesson"
                                        defaultValue={lessons.length + 1}
                                        fullWidth
                                        label="Name of student"
                                        name="id"
                                        onChange={onChangeTextFieldHandler} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        type="text"
                                        variant="outlined"
                                        placeholder="Gender of student"
                                        defaultValue={lesson.name}
                                        fullWidth
                                        label="Name of student"
                                        name="name"
                                        onChange={onChangeTextFieldHandler} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        type="text"
                                        variant="outlined"
                                        placeholder="Name of student"
                                        defaultValue={lesson.price}
                                        fullWidth
                                        label="Price"
                                        name="price"
                                        onChange={onChangeTextFieldHandler} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        type="text"
                                        required
                                        variant="outlined"
                                        placeholder="Price of lesson"
                                        defaultValue={lesson.date}
                                        fullWidth
                                        label="Date of lesson"
                                        name="date"
                                        onChange={onChangeTextFieldHandler}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        type="text"
                                        variant="outlined"
                                        placeholder="Form of student"
                                        defaultValue={lesson.paidStatus}
                                        fullWidth
                                        label="Status"
                                        name="paidStatus"
                                        onChange={onChangeTextFieldHandler}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" fullWidth onClick={onClickSaveHandler}>Create</Button>
                    </CardActions>
                </Card>
            </Dialog>
            <RoundAddButton openHandler={openCreateLessonWindow} />
        </div>
    );
};

export { LessonsPage };