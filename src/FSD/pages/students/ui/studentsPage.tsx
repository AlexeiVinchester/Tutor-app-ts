import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { UpdatePageDataProvider } from "../../../shared/ui/UpdatePageDataProvider/UpdatePageDataProvider";
import { StudentsPageHeader } from "../../../widgets/studentsPage/studentPageHeader/ui/StudentsPageHeader";
import { StudentsBoard } from "../../../widgets/studentsPage/StudentsBoard/ui/StudentsBoard";

export const StudentsPageTest = () => {
  const client = useQueryClient();
  const updateAllData = useCallback(
    () => {
      client.invalidateQueries({ queryKey: ['students'] });
      client.invalidateQueries({ queryKey: ['studentsGenderActivity'] });
    },
    [client]
  );

  return (
    <UpdatePageDataProvider updateAllData={updateAllData}>
      <StudentsPageHeader />
      <StudentsBoard />
    </UpdatePageDataProvider>
  );
};