import { StudentCardProps } from "./interface/StudentCard.interface"
import { CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";
import { maleImage, femaleImage } from "./assets/links";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import OpenInFullIcon from '@mui/icons-material/OpenInFull'; import { useNavigate } from "react-router-dom";
import { CardContainer } from "../CardContainer/CardContainer";

const StudentCard = ({ student }: StudentCardProps) => {
    const navigate = useNavigate();

    const onClickShowHandler = () => {
        navigate(`/students/${student.id}`, { state: { student } })
    };

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
            </CardActions>
        </CardContainer>
    );
};

export { StudentCard };
