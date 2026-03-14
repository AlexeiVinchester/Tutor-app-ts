import { Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Logotype = () => {
  return (
    <div
      className="flex"
      style={{ color: 'var(--color-primary-accent)' }}
    >
      <SchoolIcon sx={{ marginRight: '10px' }} />
      <Typography
        sx={{ fontSize: '20px', fontWeight: 500, color: 'var(--color-primary-accent)' }}
      >
        My Tutor
      </Typography>
    </div>
  );
};

export { Logotype };
