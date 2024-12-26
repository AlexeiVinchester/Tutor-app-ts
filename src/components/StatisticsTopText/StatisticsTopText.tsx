import { Typography } from '@mui/material';
import { IStatisticsTopTextProps } from './interface/StatisticsTopText.interface';
import React from 'react';

const StatisticsTopText = React.memo(({ value }: IStatisticsTopTextProps) => {
  return (
    <Typography
      variant="h1"
      component="p"
      sx={{
        fontFamily: '"Queens Medium", serif',
        fontWeight: 500,
        fontSize: '60px',
        textAlign: 'center',
        color: 'rgb(33, 51, 67)',
        marginTop: '30px',
        marginBottom: '30px',
      }}
    >
      {value}
    </Typography>
  );
});

export { StatisticsTopText };
