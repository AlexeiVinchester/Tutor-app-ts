import { StudentCardProps } from "./interface/StudentCard.interface"
import { CardContent, Typography, CardActions, Button, CardMedia, Divider, IconButton } from "@mui/material";
import { maleImage, femaleImage } from "./assets/links";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useNavigate } from "react-router-dom";
import { CardContainer } from "../CardContainer/CardContainer";
import { useDispatch } from "react-redux";
import { editStudent } from "../../../../redux/slices/studentsSlice/studentsSlice";

const StudentCard = ({ student }: StudentCardProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onClickShowHandler = () => {
        navigate(`/students/${student.id}`, { state: { student } });
    };

    const handleClickStatusIcon = () => {
        dispatch(editStudent({
            ...student, 
            status: !student.status
        }))
    }
    return (
        <CardContainer>
            <IconButton
                onClick={handleClickStatusIcon}
            >
                <TaskAltIcon
                    sx={student.status === 'active' ?
                        { color: 'green', } :
                        { color: 'red' }}
                    className="relative top-3 left-3"
                    fontSize="large"

                />
            </IconButton>

            <CardMedia
                component='img'
                sx={{ height: 300 }}
                image={student.gender === 'male' ? maleImage : femaleImage}
                alt={student.name}
            />
            <CardContent>
                <Typography variant="h6" component="h3" textAlign={'center'}>
                    {student.name}
                </Typography>
            </CardContent>
            <Divider sx={{ marginLeft: '16px', marginRight: '16px' }} />
            <CardActions>
                <Button
                    sx={{
                        borderRadius: '15px',
                        bgcolor: 'rgb(255, 92, 53)',
                        ":hover": {
                            bgcolor: 'rgb(80, 201, 173)'
                        }
                    }}
                    variant='contained'
                    fullWidth
                    onClick={onClickShowHandler}
                >
                    Learn more
                </Button>
            </CardActions>
        </CardContainer>
    );
};

export { StudentCard };
