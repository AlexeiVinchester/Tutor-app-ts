import { Card } from "@mui/material";

type TInfoContainerProps = {
  value: number;
  title: string;
  currency?: string;
};

export const InfoContainer = ({ value, title, currency }: TInfoContainerProps) => {
  return (
    <Card
      variant="outlined"
      className="w-[100%] !shadow-[0_3px_8px_#ABB2B9] !rounded-[12px] py-2"
    >
      <div className="flex flex-col items-center">
        <p className="text-m">{title}</p>
        <span className="text-main-orange text-[22px]">{value} {currency && currency}</span>
      </div>
    </Card>

  );
}