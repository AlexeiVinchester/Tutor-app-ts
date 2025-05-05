import { Card, CardMedia } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
import { Spinner } from "../../../../shared/ui/Spinner/Spinner";

type TGenderAmountBox = {
  amount: number | undefined;
  imagePath: string;
  isLoading: boolean;
  isError: boolean
};

export const GenderAmountBox = ({ amount, imagePath, isLoading, isError }: TGenderAmountBox) => {
  return (
    <Card variant="outlined" className="!rounded-[22px] w-[200px] relative">
      <span className="absolute left-3 top-2 text-2xl text-main-orange">
        {isLoading ? <div className="w-4 h-4"><Spinner /></div> : amount}
        {isError && <ErrorIcon color="error" />}
      </span>
      <CardMedia
        component="img"
        className="!h-[200px]"
        image={imagePath}
      />
    </Card>
  );
};