import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { StudentsPageHeader } from "../../../widgets/studentsPage/studentPageHeader/ui/StudentsPageHeader";
import { StudentsBoard } from "../../../widgets/studentsPage/StudentsBoard/ui/StudentsBoard";
import { UpdatePageDataProvider } from "../../../shared/ui/UpdatePageDataProvider/UpdatePageDataProvider";

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