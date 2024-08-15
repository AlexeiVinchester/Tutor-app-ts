import { useLocation, useNavigate } from "react-router-dom";
import { StudentsInfoContainer } from "../../components/StudentInfoContainer/StudentsInfoContainer";
import { CardContent, Typography, CardMedia, CardActions, Button, Card, Box } from "@mui/material";
import { maleImage, femaleImage } from "../../components/StudentCard/assets/links";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditIcon from '@mui/icons-material/Edit';


const StudentPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const student = location.state.student;

    const onClickEditHandler = () => {
        navigate(`/students/${student.id}/edit`, { state: { student } });
    };

    return (
        <div>
            <StudentsInfoContainer>
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
                        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
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
            </StudentsInfoContainer>
        </div>
    );
};

export { StudentPage };
