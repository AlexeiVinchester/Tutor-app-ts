import { StudentCardProps } from "./interface/StudentCard.interface"
import { CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
import { maleImage, femaleImage } from "./assets/links";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import OpenInFullIcon from '@mui/icons-material/OpenInFull'; import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteStudent } from "../../../../../redux/slices/studentsSlice/studentsSlice";
import { CardContainer } from "../CardContainer/CardContainer";

const StudentCard = ({ student }: StudentCardProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickShowHandler = () => {
        navigate(`/students/${student.id}`, { state: { student } })
    };

    const onClickDeleteHandler = () => {
        dispatch(deleteStudent(student.id))
    }

    return (
        <CardContainer>
            <CardMedia
                component='img'
                sx={{ height: 300 }}
                image={student.gender === 'male' ? maleImage : femaleImage}
                alt={student.name}
            />
            <CardContent>
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
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    variant="outlined"
                    startIcon={<OpenInFullIcon />}
                    onClick={onClickShowHandler}
                >
                    Show
                </Button>
                <Button
                    size="small"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={onClickDeleteHandler}
                >
                    Delete
                </Button>
            </CardActions>
        </CardContainer>
    );
};

export { StudentCard };
