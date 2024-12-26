import { Button } from '@mui/material';
import { ContainedButtonProps } from './interface/ContaindeButton.interface';

const ContainedButton = ({ onClick, value }: ContainedButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        borderRadius: '15px',
        margin: '0 15px 0 15px',
        bgcolor: 'rgb(255, 92, 53)',
        padding: '16px',
        color: 'white',
        ':hover': {
          bgcolor: 'rgb(80, 201, 173)',
        },
      }}
    >
      {value}
    </Button>
  );
};

export { ContainedButton };
