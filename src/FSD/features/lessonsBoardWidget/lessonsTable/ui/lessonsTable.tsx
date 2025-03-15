import React from "react";
import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { LessonsTableRow } from "./lessonsTableRow";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from "@mui/material";
import { TLoadLessonsRequestData } from "../../../../entities/lesson/api/loaders";

type TLessonsTableProps = {
  lessons: TLesson[];
  isError: boolean;
  updateData: ({ page, perPage, name }: TLoadLessonsRequestData) => Promise<void>;
}

export const LessonsTable = React.memo(({ lessons, isError, updateData }: TLessonsTableProps) => {

  const handleClickUpdate = () => () => updateData({});

  if (isError) {
    return (
      <div>
        <p>Something goes wrong!</p>
        <IconButton onClick={handleClickUpdate}>Update lessons</IconButton>
      </div>
    )
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 400, minWidth: 650, border:  "1px solid #d1d5db", borderRadius: '12px' }} >
      <Table sx={{ minWidth: 650}} stickyHeader>
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
});