import {
  Container,
  Grid,
  IconButton,
} from '@mui/material';
import { StudentsList } from './components/StudentsList/StudentsList';
import { useContext, useState } from 'react';
import { ModalWindowContext } from '../../context/modalWindow/ModalWindowProvider';
import { ModalWindow } from '../../components/ModalWindow/ModalWindow';
import { AddNewStudentContainer } from './components/AddNewStudentContainer/AddNewStudentContainer';
import { SnackMessage } from '../../share/components/SnackMessage/SnackMessage';
import { EditMessageContext } from '../../context/EditMessage/EditMessageProvider';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Student } from '../../share/interfaces/student.interface';
import { useFetch } from '../../hooks/useFetch';
import { Spinner } from '../../FSD/shared/ui/Spinner/Spinner';

const StudentsPage = () => {
  const {
    data: students,
    isLoading: isLoadingStudents,
    error: errorLoadingStudents,
  } = useFetch<Student>('http://localhost:3002/getStudents');

  const { modalState, close, open } = useContext(ModalWindowContext);
  const { isEditMessageOpen, closeEditMessage } =
    useContext(EditMessageContext);
  const [isAddMessageOpen, setIsAddMessageOpen] = useState(false);

  const openAddMessage = () => setIsAddMessageOpen(true);
  const closeAddMessage = () => setIsAddMessageOpen(false);


  return (
    <>
     
      <Container sx={{ pt: '1rem', pb: '5rem' }}>
        <div className="flex justify-center items-center mb-8">
          <input
            className="w-[60%] rounded-[22px] p-3 border-2 hover:border-amount-of-students focus:border-none"
            type="search"
            placeholder="Try to find student..."
          />
          <IconButton
            sx={{
              color: 'rgb(255, 69, 0)',
              ':hover': {
                bgcolor: 'rgb(80, 201, 173)',
                color: 'white',
              },
            }}
            onClick={open}
          >
            <PersonAddIcon fontSize="large" />
          </IconButton>
        </div>
        {errorLoadingStudents && <h2>Error while loading students</h2>}
        {isLoadingStudents && <Spinner />}
        {students[0] && (
          <Grid
            container
            spacing={2}
            className="mb-4"
            sx={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <StudentsList students={students} />
          </Grid>
        )}

        <ModalWindow
          title="Create new student"
          onClose={close}
          modalState={modalState}
        >
          <AddNewStudentContainer
            nextId={students.length}
            openSnackHandler={openAddMessage}
          />
        </ModalWindow>
        <SnackMessage
          isOpen={isAddMessageOpen}
          onCLose={closeAddMessage}
          status="success"
          message="New student was added!"
        />
        <SnackMessage
          isOpen={!!isEditMessageOpen}
          onCLose={closeEditMessage}
          status="success"
          message={isEditMessageOpen}
        />
      </Container>
    </>
  );
};

export { StudentsPage };
