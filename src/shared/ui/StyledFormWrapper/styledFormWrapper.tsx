import { Card, CardContent } from '@mui/material';
import { ReactNode } from 'react';

type TStyledFormWrapperProps = {
  children: ReactNode;
};

export const StyledFormWrapper = ({ children }: TStyledFormWrapperProps) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        margin: ' 0 auto',
        padding: '10px 5px',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};
