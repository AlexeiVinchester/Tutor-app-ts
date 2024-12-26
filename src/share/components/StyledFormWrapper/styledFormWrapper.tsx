import { Card, CardContent } from '@mui/material';
import { ReactNode } from 'react';

type TStyledFormWrapperProps = {
  children: ReactNode;
};

export const StyledFormWrapper = ({ children }: TStyledFormWrapperProps) => {
  return (
    <Card
      sx={{
        maxWidth: 500,
        margin: ' 0 auto',
        padding: '10px 5px',
        boxShadow: '0 15px 20px #ABB2B9;',
      }}
    >
      <CardContent>{children}</CardContent>
    </Card>
  );
};
