import {
  Card,
  CardContent,
  Dialog,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IEditLessonContainerProps } from './interface/EditLessonContainer.interface';
import { EditLessonForm } from '../../../../FSD/features/lessonsContainerWidget/editLessonForm/ui/editLessonForm';

const EditLessonContainer = ({
  oldLesson,
  isOpen,
  close,
}: IEditLessonContainerProps) => {
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
          padding: '20px 10px',
          boxShadow: '0 15px 20px #ABB2B9;',
          backgroundColor: '#f7f5f5f9',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Edit {oldLesson.id} lesson
          </Typography>
          <EditLessonForm lesson={oldLesson} />
        </CardContent>

      </Card>
    </Dialog>
  );
};

export { EditLessonContainer };
