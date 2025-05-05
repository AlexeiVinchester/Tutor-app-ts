import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { UpdatePageDataProvider } from "../../../shared/ui/UpdatePageDataProvider/UpdatePageDataProvider";
import { StudentsPageHeader } from "../../../widgets/studentsPage/studentPageHeader/ui/StudentsPageHeader";

export const StudentsPageTest = () => {
  const client = useQueryClient();
  const updateAllData = useCallback(
    () => client.invalidateQueries({ queryKey: ['students'] }),
    [client]
  );

  return (
    <UpdatePageDataProvider updateAllData={updateAllData}>
      <StudentsPageHeader />
    </UpdatePageDataProvider>
  );
};