import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { useCallback, useState } from 'react';
import { ILesson } from '../../../../share/interfaces/lesson.interface';
import CloseIcon from '@mui/icons-material/Close';
import { IEditLessonContainerProps } from './interface/EditLessonContainer.interface';
import { useDispatch } from 'react-redux';
import { editLesson } from '../../../../redux/slices/lessonsSlice/lessonsSlice';
import { showSnackMessage } from '../../../../redux/slices/snackMessageSlice/snackMessageSlice';
import { createSnackMessage } from '../../../../utils/createSnackMessage';

const EditLessonContainer = ({
  oldLesson,
  isOpen,
  close,
}: IEditLessonContainerProps) => {
  const [lesson, setLesson] = useState<ILesson>(oldLesson);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onClickSaveHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3002/updateSingleLesson/${lesson._id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(lesson),
        }
      );

      if (response.ok) {
        dispatch(editLesson(lesson));
        dispatch(
          showSnackMessage(
            createSnackMessage(
              `Lesson with ${lesson.id} id was edited!`,
              'success'
            )
          )
        );
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(
          showSnackMessage(
            createSnackMessage(
              `Error while editing lesson ${lesson.id}!`,
              'error'
            )
          )
        );
      } else {
        dispatch(
          showSnackMessage(
            createSnackMessage(`Unknown error occured!`, 'error')
          )
        );
      }
    } finally {
      setIsLoading(false);
      close();
    }
  }, [close, dispatch, lesson]);

  const onChangeTextFieldHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setLesson((prev: ILesson) => {
        switch (e.target.name) {
          case 'paidStatus':
            return {
              ...prev,
              [e.target.name]: e.target.value === 'true' ? true : false,
            };
            break;
          case 'price':
            return {
              ...prev,
              [e.target.name]: +e.target.value,
            };
            break;
          default:
            return {
              ...prev,
              [e.target.name]: e.target.value,
            };
        }
      });
    },
    []
  );

  return (
    <Dialog open={isOpen} onClose={close}>
      <IconButton
        sx={{ position: 'absolute', right: '5px', top: '5px' }}
        onClick={close}
      >
        <CloseIcon />
      </IconButton>
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
            Edit lesson with id: {lesson.id}
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
                  defaultValue={oldLesson.name}
                  fullWidth
                  label="Name of student"
                  name="name"
                  onChange={onChangeTextFieldHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="text"
                  variant="outlined"
                  placeholder="Name of student"
                  defaultValue={oldLesson.price}
                  fullWidth
                  label="Price"
                  name="price"
                  onChange={onChangeTextFieldHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  required
                  variant="outlined"
                  placeholder="Price of lesson"
                  defaultValue={oldLesson.date}
                  fullWidth
                  label="Date of lesson"
                  name="date"
                  onChange={onChangeTextFieldHandler}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="text"
                  variant="outlined"
                  placeholder="Form of student"
                  defaultValue={oldLesson.paidStatus}
                  fullWidth
                  label="Status"
                  name="paidStatus"
                  onChange={onChangeTextFieldHandler}
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
            {isLoading ? 'Editting...' : 'Edit'}
          </Button>
        </CardActions>
      </Card>
    </Dialog>
  );
};

export { EditLessonContainer };
