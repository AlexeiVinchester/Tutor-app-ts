import { useEditStudent } from "../lib/useEditStudent";
import { TStudent } from "../../../../../entities/student/model/student.type"
import { StudentForm } from "../../../../../entities/student/ui/studentForm"
import { Spinner } from "../../../../../shared/ui/Spinner/Spinner";

type TEditStudentFormProps = {
  student: TStudent;
  updateAllData: () => void;
};

export const EditStudentForm = ({ student, updateAllData }: TEditStudentFormProps) => {
  const {
    isPendingEditing,
    handleSubmit
  } = useEditStudent(student, updateAllData)

  if (isPendingEditing) {
    return <Spinner />
  }

  return (
    <StudentForm
      defaultValues={{
        ...student,
        price: +student.price,
        form: +student.form
      }}
      buttonName="Edit Student"
      onSubmit={handleSubmit}
    />
  )
}