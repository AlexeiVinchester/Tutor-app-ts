import {
  Dialog,
  IconButton,
  Card,
  CardContent,
  Typography,

} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { AddNewLessonContainerProps } from './interface/AddNewLessonContainer.interface';
import { CreateNewLessonForm } from '../../../../FSD/features/lessonsContainerWidget/createNewLessonForm/ui/createNewLessonForm';

const AddNewLessonContainer = ({
  isOpenCreateLessonWindow,
  closeCreateLessonWindow,
}: AddNewLessonContainerProps) => {
  return (
    <Dialog open={isOpenCreateLessonWindow} onClose={closeCreateLessonWindow}>
      <IconButton
        sx={{ position: 'absolute', right: '5px', top: '5px' }}
        onClick={closeCreateLessonWindow}
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
            Create new lesson
          </Typography>
          <CreateNewLessonForm />
        </CardContent>
      </Card>
    </Dialog>
  );
};

export { AddNewLessonContainer };
