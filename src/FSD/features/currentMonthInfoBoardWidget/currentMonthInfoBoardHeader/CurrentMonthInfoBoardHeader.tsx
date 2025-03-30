import UpdateIcon from '@mui/icons-material/Update';
import { CardHeader } from '@mui/material';
import { BoardStyledButton } from '../../../shared/ui/BoardStyledButton/BoardStyledButton';
import { useUpdateDataByClick } from '../../../shared/hooks/useUpdateDataByClick';

type TCurrentMonthInfoBoardHeader = {
  isPending: boolean;
};

export const CurrentMonthInfoBoardHeader = ({ isPending }: TCurrentMonthInfoBoardHeader) => {
  const handleClickUpdate = useUpdateDataByClick(['currentMonthInfo']);

  return (
    <CardHeader
      className='!pb-0'
      title={
        <h5 className="font-bold flex items-center">
          Current month info board
        </h5>
      }
      action={
        <div className="flex items-center">
          <BoardStyledButton
            disabled={isPending}
            icon={UpdateIcon}
            onClick={handleClickUpdate}
            toolTipTitle="Update info"
          />
        </div>
      }
    />
  );
};