import { Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { Student } from "../../share/interfaces/student.interface";
import { useDispatch } from "react-redux";
import { editStudent } from "../../redux/slices/studentsSlice/studentsSlice";
import { STUDENTS } from "../../Router/routes";
import { EditMessageContext } from "../../context/EditMessage/EditMessageProvider";

const EditStudentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const oldStudent = location.state.student;
    const [student, setStudent] = useState<Student>(oldStudent);

    const { openEditMessage } = useContext(EditMessageContext);

    const onChangeTextFieldHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStudent((prev: Student) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            };
        });
    };

    const onClickSaveHandler = () => {
        dispatch(editStudent(student));
        navigate(STUDENTS);
        openEditMessage(`${student.name} was edited!`);
    };

    return (
        <Container sx={{ mt: '1rem' }}>
            <Card sx={{ maxWidth: 500, margin: ' 0 auto', mt: "80px", padding: '20px 5px', boxShadow: '0 15px 20px #ABB2B9;', backgroundColor: '#f7f5f5f9' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">Edit student card</Typography>
                    <Typography sx={{ mb: '15px' }} color="textSecondary" variant="body2" component='p'>
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
                                    defaultValue={student.gender}
                                    fullWidth
                                    label="Gender of student"
                                    name="gender"
                                    onChange={onChangeTextFieldHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    type="text"
                                    variant="outlined"
                                    placeholder="Name of student"
                                    defaultValue={student.name}
                                    fullWidth
                                    label="Name of student"
                                    name="name"
                                    onChange={onChangeTextFieldHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    type="number"
                                    required
                                    variant="outlined"
                                    placeholder="Price of lesson"
                                    defaultValue={student.price}
                                    fullWidth
                                    label="Price of lesson"
                                    name="price"
                                    onChange={onChangeTextFieldHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    type="number"
                                    variant="outlined"
                                    placeholder="Form of student"
                                    defaultValue={student.form}
                                    fullWidth
                                    label="Form of student"
                                    name="form"
                                    onChange={onChangeTextFieldHandler}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    placeholder="Parents phone number"
                                    defaultValue={student.parentsMobilePhone}
                                    fullWidth
                                    label="Parents phone number"
                                    onChange={onChangeTextFieldHandler}
                                    name="parentsMobilePhone"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    placeholder="Parents name"
                                    defaultValue={student.parentsName}
                                    fullWidth
                                    label="Parents name"
                                    onChange={onChangeTextFieldHandler}
                                    name="parentsName"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    placeholder="Student's phone number"
                                    defaultValue={student.ownMobilePhone || ''}
                                    fullWidth
                                    label="Student's phone number"
                                    onChange={onChangeTextFieldHandler}
                                    name="ownMobilePhone"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    placeholder="Status active or inactive"
                                    defaultValue={student.status}
                                    fullWidth
                                    label="Status"
                                    onChange={onChangeTextFieldHandler}
                                    name="status"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    placeholder="Description"
                                    defaultValue=''
                                    fullWidth
                                    label="Description"
                                    onChange={onChangeTextFieldHandler}
                                    name="description"
                                />
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" fullWidth onClick={onClickSaveHandler}>Save</Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export { EditStudentPage };
