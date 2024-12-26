import { Button, ButtonProps } from '@mui/material';

export const StyledButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
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
      {children}
    </Button>
  );
};
