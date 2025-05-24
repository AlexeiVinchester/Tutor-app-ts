import { defaultStudentFormValues } from "../model/defaultFormValues";
import { useCreateNewStudent } from "../lib/useCreateNewStudent";
import { useInitialStudentData } from "../lib/useInitialSudentData";
import { StudentForm } from "../../../../../entities/student/ui/studentForm";
import { Spinner } from "../../../../../shared/ui/Spinner/Spinner";

type TCreateNewStudentFormProps = {
  updateAllData: () => void;
};

export const CreateNewStudentForm = ({ updateAllData }: TCreateNewStudentFormProps) => {
  const {
    initialStudentsData,
    isErrorInitialStudentParams,
    isLoadingInitialStudentParams
  } = useInitialStudentData();

  const {
    isPendingCreation,
    handleSubmitForm
  } = useCreateNewStudent({ updateAllData, initialStudentsData });

  if (isLoadingInitialStudentParams || isPendingCreation) {
    return <Spinner />
  }

  if (isErrorInitialStudentParams || !initialStudentsData) {
    return <p>Yooops, something goes wrong!</p>;
  }

  return (
    <StudentForm
      defaultValues={defaultStudentFormValues}
      onSubmit={handleSubmitForm}
      buttonName="Create Student"
    />
  );
};