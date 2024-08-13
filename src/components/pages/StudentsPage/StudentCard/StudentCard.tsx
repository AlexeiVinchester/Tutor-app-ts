import { StudentCardProps } from "./interface/StudentCard.interface"
import { CardContent, Typography, CardActions, Button, Card, Box, CardMedia } from "@mui/material";
import { maleImage, femaleImage } from "./assets/links";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const StudentCard = ({ student }: StudentCardProps) => {
    return (
        <Box sx={{ minWidth: 275, width: 300 }} key={student.id}>
            <Card variant="outlined">
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
                    <Typography variant="body1" component="div">
                        Price: {student.price} BYN
                        <br />
                        Form: {student.form}
                    </Typography>
                    <Typography variant="body2">
                        Phone: {student.mobilePhone}
                    </Typography>
                    <Typography sx={{ flexDirection: 'row', display: 'flex', }}>
                        <Typography>Status: </Typography>
                        <TaskAltIcon
                            sx={student.status === 'active' ?
                                { color: 'green' } :
                                { color: 'red' }}
                        />
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined" startIcon={<EditIcon />}>
                        Edit
                    </Button>
                    <Button size="small" variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export { StudentCard };
