import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { TableOfLessonsProps } from './interface/TableOfLessons.interface';
import { BodyTableRow } from '../BodyTableRow/BodyTableRow';
import React from 'react';

const TableOfLessons = React.memo(({ lessons }: TableOfLessonsProps) => {
  console.log('lessons table render');
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 640 }}>
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <TableHead>
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
              <BodyTableRow key={lesson.id} lesson={lesson} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
});

export { TableOfLessons };
