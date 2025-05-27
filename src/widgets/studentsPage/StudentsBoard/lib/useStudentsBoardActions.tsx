import { CreateNewStudentForm } from "../../../../features/studentsPage/studentsBoardWidget/createNewStudentForm/ui/CreateNewStudentForm";
import { useModalWindowContext } from "../../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { useUpdatePageDataContext } from "../../../../shared/context/updatePageDataContext";

export const useStudentsBoardActions = () => {
  const { updateAllData } = useUpdatePageDataContext();
  const handleClickUpdateStudents = () => {
    updateAllData();
  };

  const { open } = useModalWindowContext();
  const handleClickAddNewStudent = () => {
    open(<CreateNewStudentForm updateAllData={updateAllData} />,
      'New student'
    )
  };

  return {
    handleClickAddNewStudent,
    handleClickUpdateStudents
  };
};