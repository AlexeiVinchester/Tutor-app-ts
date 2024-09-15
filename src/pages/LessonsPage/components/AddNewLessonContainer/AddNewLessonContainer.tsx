import { Dialog, IconButton, Card, CardContent, Typography, Grid, TextField, CardActions, Button } from "@mui/material";
import { useContext, useState } from "react";
import { ILesson } from "../../../../share/interfaces/lesson.interface";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../../../redux/store/interface/store.interface";
import CloseIcon from '@mui/icons-material/Close';
import { addNewLesson } from "../../../../redux/slices/lessonsSlice/lessonsSlice";
import { EditMessageContext } from "../../../../context/EditMessage/EditMessageProvider";
import { AddNewLessonContainerProps } from "./interface/AddNewLessonContainer.interface";

const AddNewLessonContainer = ({ isOpenCreateLessonWindow, closeCreateLessonWindow }: AddNewLessonContainerProps) => {
    const nextLessonId = useSelector((store: Store) => store.lessons.length + 1);
    const dispatch = useDispatch();
    const { openEditMessage } = useContext(EditMessageContext)

    const [lesson, setLesson] = useState<ILesson>({
        id: nextLessonId,
        name: '',
        price: 0,
        date: '',
        paidStatus: false
    });
    
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

    const onClickSaveHandler = () => {
        dispatch(addNewLesson(lesson));
        closeCreateLessonWindow();
        openEditMessage(`${lesson.id}: New lesson was added!`);
    };

    return (
        
        <Dialog open={isOpenCreateLessonWindow} onClose={closeCreateLessonWindow}>
            <IconButton sx={{ position: 'absolute', right: '5px', top: '5px' }} onClick={closeCreateLessonWindow} ><CloseIcon /></IconButton>
            <Card sx={{ maxWidth: 500, margin: ' 0 auto', padding: '10px 5px', boxShadow: '0 15px 20px #ABB2B9;', backgroundColor: '#f7f5f5f9' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">Create new lesson</Typography>
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
                                    placeholder="Name of student"
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
    );
};

export { AddNewLessonContainer };
