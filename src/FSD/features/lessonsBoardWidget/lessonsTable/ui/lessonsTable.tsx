import React from "react";
import { TLesson } from "../../../../entities/lesson/model/lesson.type";
import { LessonsTableRow } from "./lessonsTableRow";
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

type TLessonsTableProps = {
  lessons: TLesson[];
  isError: boolean;
};

export const LessonsTable = React.memo(({ lessons, isError }: TLessonsTableProps) => {
  if (isError) {
    return <p>Something goes wrong! Try again!</p>;
  };

  return (
    <TableContainer
      component={Paper}
      className="!max-h-[423px] !min-w-[650px] !border !border-gray-300 !rounded-[12px]"
    >
      <Table
        className="!min-w-[650px]"
        stickyHeader
      >
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