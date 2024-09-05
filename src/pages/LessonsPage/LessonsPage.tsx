import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../redux/store/interface/store.interface";
import { Button, Card, CardActions, CardContent, Container, Dialog, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { RoundAddButton } from "../../share/components/RoundAddButton/RoundAddButton";
import { useState } from "react";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { addNewLesson } from "../../redux/slices/lessonsSlice/lessonsSlice";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

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
                <TableContainer component={Paper} sx={{ maxHeight: 640 }}>
                    <Table sx={{ minWidth: 650 }} stickyHeader>
                        <TableHead >
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="center">Price</TableCell>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Paymant</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {lessons.map((lesson) => {
                                return (
                                    <TableRow
                                        key={lesson.id}
                                    >
                                        <TableCell>{lesson.id}</TableCell>
                                        <TableCell align="left">{lesson.name}</TableCell>
                                        <TableCell align="center">{lesson.price}</TableCell>
                                        <TableCell align="center">{lesson.date}</TableCell>
                                        <TableCell align="center">{lesson.paidStatus ? <DoneIcon color="success" /> : <CloseIcon color='warning' />}</TableCell>
                                        <TableCell align="center"><IconButton onClick={() => onClickEditHandler(lesson)} ><EditIcon /></IconButton></TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
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