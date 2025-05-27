import { Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Logotype = () => {
  return (
    <div
      className="flex"
      style={{ marginRight: '40px', color: 'rgb(255, 69, 0)' }}
    >
      <SchoolIcon sx={{ marginRight: '10px' }} />
      <Typography
        sx={{ fontSize: '20px', fontWeight: 500, color: 'rgb(255, 69, 0)' }}
      >
        My Tutor
      </Typography>
    </div>
  );
};

export { Logotype };
