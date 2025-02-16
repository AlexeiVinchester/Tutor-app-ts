import React from "react";
import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { LessonsTableRow } from "./lessonsTableRow";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";

type TLessonsTableProps = {
  lessons: TLesson[] | null;
  isLoading: boolean;
  isError: boolean;
  updateData: () => void;
}

export const LessonsTable = React.memo(({ lessons, isLoading, isError, updateData }: TLessonsTableProps) => {
  if (isLoading) {
    return <p>Loading od debtors...</p>
  }

  if (isError || !lessons) {
    return (
      <div>
        <p>Something goes wrong!</p>
        <IconButton onClick={updateData}>Update lessons</IconButton>
      </div>
    )
  }

  return (
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
          {
            lessons.map((lesson) => (
              <LessonsTableRow key={lesson.id} lesson={lesson} />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
})