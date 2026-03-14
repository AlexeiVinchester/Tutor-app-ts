import { Button, ButtonProps } from '@mui/material';

export const StyledButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="contained"
      sx={{
        borderRadius: '15px',
        margin: '0 15px 0 15px',
        bgcolor: 'var(--color-primary)',
        padding: '10px',
        color: 'var(--color-bg-white)',
        ':hover': {
          bgcolor: 'var(--color-turquoise)',
        },
      }}
    >
      {children}
    </Button>
  );
};
