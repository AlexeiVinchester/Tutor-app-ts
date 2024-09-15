import { Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ILesson } from "../../share/interfaces/lesson.interface";
import { useDispatch } from "react-redux";
import { editLesson } from "../../redux/slices/lessonsSlice/lessonsSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { EditMessageContext } from "../../context/EditMessage/EditMessageProvider";
import { LESSONS } from "../../Router/routes";

const EditLessonPage = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const oldLesson = location.state.lesson;
    const [lesson, setLesson] = useState<ILesson>(oldLesson);
    const { openEditMessage } = useContext(EditMessageContext);
    const navigate = useNavigate();

    const onClickSaveHandler = () => {
        dispatch(editLesson(lesson));
        navigate(LESSONS);
        openEditMessage(`Lesson with ${lesson.id} id was edited!`)
    };

    const onChangeTextFieldHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setLesson((prev: ILesson) => {
            switch (e.target.name) {
                case 'paidStatus':
                    return {
                        ...prev,
                        [e.target.name]: e.target.value === 'true' ? true : false
                    };
                    break;
                case 'price':
                    return {
                        ...prev,
                        [e.target.name]: +e.target.value
                    }
                    break;
                default:
                    return {
                        ...prev,
                        [e.target.name]: e.target.value
                    };
            }
        });
    };

    return (
        <Container sx={{ mt: '80px' }}>
            <Card sx={{ maxWidth: 500, margin: ' 0 auto', padding: '10px 5px', boxShadow: '0 15px 20px #ABB2B9;', backgroundColor: '#f7f5f5f9' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">Edit lesson with id: {lesson.id}</Typography>
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
                                    placeholder="Gender of student"
                                    defaultValue={oldLesson.name}
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
                                    defaultValue={oldLesson.price}
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
                                    defaultValue={oldLesson.date}
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
                                    defaultValue={oldLesson.paidStatus}
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
                    <Button variant="contained" color="primary" fullWidth onClick={onClickSaveHandler}>Edit lesson</Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export { EditLessonPage }; 
