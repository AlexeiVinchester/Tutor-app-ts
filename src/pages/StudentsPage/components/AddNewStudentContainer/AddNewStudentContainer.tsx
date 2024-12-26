import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  CardActions,
  Button,
} from '@mui/material';
import { useContext, useState } from 'react';
import { Student } from '../../../../share/interfaces/student.interface';
// import { useDispatch, useSelector } from "react-redux";
// import { Store } from "../../../../redux/store/interface/store.interface";
// import { addNewStudent } from "../../../../redux/slices/studentsSlice/studentsSlice";
import { ModalWindowContext } from '../../../../context/modalWindow/ModalWindowProvider';

const AddNewStudentContainer = ({
  openSnackHandler,
  nextId,
}: {
  nextId: number;
  openSnackHandler: () => void;
}) => {
  //const nextId = useSelector((store: Store) => store.students.length);
  //const dispatch = useDispatch();
  const { close: closeModalWindow } = useContext(ModalWindowContext);

  const [student, setStudent] = useState<Student>({
    id: nextId,
    name: '',
    gender: 'male',
    price: '',
    form: '',
    ownMobilePhone: '',
    parentsMobilePhone: '',
    parentsName: '',
    status: 'active',
  });

  const onClickSaveHandler = () => {
    //dispatch(addNewStudent(student));
    fetch('http://localhost:3002/addStudent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    closeModalWindow();
    openSnackHandler();
  };

  const onChangeTextFieldHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStudent((prev: Student) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 500,
          margin: ' 0 auto',
          padding: '10px 5px',
          boxShadow: '0 15px 20px #ABB2B9;',
          backgroundColor: '#f7f5f5f9',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Create student card
          </Typography>
          <Typography
            sx={{ mb: '15px' }}
            color="textSecondary"
            variant="body2"
            component="p"
          >
            Fill in the form with new values
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  required
                  type="text"
                  variant="outlined"
                  placeholder="Gender of student"
                  defaultValue={student.name}
                  fullWidth
                  label="Gender of student"
                  name="gender"
                  onChange={onChangeTextFieldHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="text"
                  variant="outlined"
                  placeholder="Name of student"
                  defaultValue={student.name}
                  fullWidth
                  label="Name of student"
                  name="name"
                  onChange={onChangeTextFieldHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  required
                  variant="outlined"
                  placeholder="Price of lesson"
                  defaultValue={student.price}
                  fullWidth
                  label="Price of lesson"
                  name="price"
                  onChange={onChangeTextFieldHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="number"
                  variant="outlined"
                  placeholder="Form of student"
                  defaultValue={student.form}
                  fullWidth
                  label="Form of student"
                  name="form"
                  onChange={onChangeTextFieldHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  variant="outlined"
                  placeholder="Parents phone number"
                  defaultValue={student.parentsMobilePhone}
                  fullWidth
                  label="Parents phone number"
                  onChange={onChangeTextFieldHandler}
                  name="parentsMobilePhone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  variant="outlined"
                  placeholder="Parents name"
                  defaultValue={student.parentsName}
                  fullWidth
                  label="Parents name"
                  onChange={onChangeTextFieldHandler}
                  name="parentsName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  variant="outlined"
                  placeholder="Student's phone number"
                  defaultValue={student.ownMobilePhone || ''}
                  fullWidth
                  label="Student's phone number"
                  onChange={onChangeTextFieldHandler}
                  name="ownMobilePhone"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  variant="outlined"
                  placeholder="Status active or inactive"
                  defaultValue={student.status}
                  fullWidth
                  label="Status"
                  onChange={onChangeTextFieldHandler}
                  name="status"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  variant="outlined"
                  placeholder="Description"
                  defaultValue=""
                  fullWidth
                  label="Description"
                  onChange={onChangeTextFieldHandler}
                  name="description"
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onClickSaveHandler}
          >
            Create
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export { AddNewStudentContainer };
