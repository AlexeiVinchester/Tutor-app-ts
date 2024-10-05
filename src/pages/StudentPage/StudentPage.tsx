import { useLocation, useNavigate } from "react-router-dom";
import { CardContent, Typography, CardMedia, CardActions, Button, Card, Box, Container, IconButton } from "@mui/material";
import { maleImage, femaleImage } from "../StudentsPage/components/StudentCard/assets/links";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditIcon from '@mui/icons-material/Edit';
import { STUDENTS } from "../../Router/routes";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StudentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const student = location.state.student;

    const onClickEditHandler = () => {
        navigate(`/students/${student.id}/edit`, { state: { student } });
    };

    const onClickBackToStidentsHandler = () => {
        navigate(STUDENTS);
    };

    return (
        <div>
            <Container sx={{ pt: '1rem' }}>
                <Box sx={{ boxShadow: '0 15px 20px #ABB2B9;' }} >
                    <Card variant="outlined">
                        <div style={{ display: 'flex', flexDirection: 'row', }}>
                            <CardMedia
                                component='img'
                                sx={{ height: 500, width: 500 }}
                                image={student.gender === 'male' ? maleImage : femaleImage}
                            />
                            <CardContent >
                                <Typography variant="h6" component="h3">
                                    {student.name}
                                </Typography>
                                <Typography sx={{ flexDirection: 'row', display: 'flex', }}>
                                    Status:
                                    <TaskAltIcon
                                        sx={student.status === 'active' ?
                                            { color: 'green' } :
                                            { color: 'red' }}
                                    />
                                </Typography>
                                <Typography variant="body1" component="div">
                                    Price: {student.price} BYN
                                    <br />
                                    Form: {student.form}
                                    <br />
                                    Parents phone: {student.parentsMobilePhone}
                                    <br />
                                    Parent name: {student.parentsName}
                                </Typography>
                                {
                                    student.ownMobilePhone && <Typography variant="body1">
                                        Own phone: {student.ownMobilePhone}
                                    </Typography>
                                }
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    Description:
                                </Typography>
                            </CardContent>
                        </div>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <IconButton onClick={onClickBackToStidentsHandler} sx={{color: 'rgb(80, 201, 173)'}}>
                                <ArrowBackIcon />
                            </IconButton>
                            <Button
                                size="small"
                                variant="outlined"
                                startIcon={<EditIcon />}
                                onClick={onClickEditHandler}
                            >
                                Edit
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </Container>
        </div>
    );
};

export { StudentPage };
