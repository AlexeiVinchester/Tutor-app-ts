import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { TableOfLessonsProps } from "./interface/TableOfLessons.interface";

const TableOfLessons = ({ lessons, editLesson }: TableOfLessonsProps) => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 640 }}>
            <Table sx={{ minWidth: 650 }} stickyHeader>
                <TableHead >
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Paymant</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lessons.map((lesson) => (
                        <TableRow key={lesson.id}>
                            <TableCell>{lesson.id}</TableCell>
                            <TableCell align="left">{lesson.name}</TableCell>
                            <TableCell align="center">{lesson.price}</TableCell>
                            <TableCell align="center">{lesson.date}</TableCell>
                            <TableCell align="center">{lesson.paidStatus ? <DoneIcon color="success" /> : <CloseIcon color='warning' />}</TableCell>
                            <TableCell align="center"><IconButton onClick={() => editLesson(lesson)} ><EditIcon /></IconButton></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export { TableOfLessons }; 
