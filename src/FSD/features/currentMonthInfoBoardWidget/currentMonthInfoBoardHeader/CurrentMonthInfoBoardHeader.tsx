import UpdateIcon from '@mui/icons-material/Update';
import { CardHeader } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { BoardHeaderStyledButton } from '../../../shared/ui/BoardHeaderStyledButton/BoardHeaderSrtledButton';

type TCurrentMonthInfoBoardHeader = {
  isPending: boolean;
};

export const CurrentMonthInfoBoardHeader = ({ isPending }: TCurrentMonthInfoBoardHeader) => {
  const client = useQueryClient();

  const handleClickUpdate = () =>
    client.invalidateQueries({ queryKey: ['currentMonthInfo'] });

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
          <BoardHeaderStyledButton
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