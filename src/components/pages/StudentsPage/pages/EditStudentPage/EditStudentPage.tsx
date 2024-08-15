import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";
import { StudentsInfoContainer } from "../../components/StudentInfoContainer/StudentsInfoContainer";
import { useNavigate, useLocation } from "react-router-dom";
const EditStudentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const student = location.state.student;

    const onClickSaveHandler = () => {
        navigate('/students');
    };

    return (
        <StudentsInfoContainer>
            <Card sx={{ maxWidth: 500, margin: ' 0 auto', mt: "80px", padding: '20px 5px',boxShadow: '0 15px 20px #ABB2B9;' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5">Edit student card</Typography>
                    <Typography sx={{mb: '15px'}} color="textSecondary" variant="body2" component='p'>
                        Fill in the form with new values
                    </Typography>
                    <form>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    placeholder="Name of student"
                                    defaultValue={student.name}
                                    fullWidth
                                    label="Name of student" />
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
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    variant="outlined"
                                    placeholder="Description"
                                    defaultValue=''
                                    fullWidth
                                    multiline rows={4}
                                    label="Description"
                                />
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="primary" fullWidth onClick={onClickSaveHandler}>Save</Button>
                </CardActions>
            </Card>
        </StudentsInfoContainer>
    );
};

export { EditStudentPage };
