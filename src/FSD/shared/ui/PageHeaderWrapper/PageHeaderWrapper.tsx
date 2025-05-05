import { Container } from '@mui/material';

export type TPageHeaderWrapperProps = {
  children: React.ReactNode;
  heightInPx: number;
};

export const PageHeaderWrapper = ({
  children,
  heightInPx,
}: TPageHeaderWrapperProps) => {
  return (
    <div className={`w-full bg-bg-info h-[${heightInPx}px] pb-8`}>
      <Container>
        <div className="flex flex-col items-center justify-between pt-10 sm:flex-row">
          {children}
        </div>
      </Container>
    </div>
  );
};