import { Button } from "@mui/material";
import { TPaginationParams } from "../../types/pagination";
import { PaginationCircleButton } from "../PaginationCircleButton/PaginationCircleButton";
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
type TPaginationContainerProps = {
  paginationParams: TPaginationParams;
  handleChangePage: (page: number) => void;
};

export const PaginationContainer = ({ paginationParams, handleChangePage }: TPaginationContainerProps) => {
  const { page, pages, prevPage, nextPage } = paginationParams;

  const handleClickPage = (page: number) => () => {
    handleChangePage(page);
  };

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex gap-3">
        {(prevPage && page !== 1) &&
          <Button className="!text-main-orange hover:!text-main-turquoise" onClick={handleClickPage(prevPage)}><WestIcon /> Back</Button>
        }
        <PaginationCircleButton onClick={handleClickPage(1)} value={1} disabled={page === 1} />
        {page !== 1 && '...'}
        {(prevPage && prevPage !== 1) &&
          <PaginationCircleButton onClick={handleClickPage(prevPage)} value={prevPage} />
        }
        {(![1, pages].includes(page)) && <PaginationCircleButton value={page} disabled />}
        {(nextPage && nextPage !== pages) &&
          <PaginationCircleButton onClick={handleClickPage(nextPage)} value={nextPage} />
        }
        {page !== pages && '...'}
        <PaginationCircleButton onClick={handleClickPage(pages)} value={pages} disabled={page === pages} />
        {nextPage &&
          <Button className="!text-main-orange hover:!text-main-turquoise" onClick={handleClickPage(nextPage)}>Next<EastIcon /></Button>
        }
      </div>
      <span className="text-sm">{page} from {pages}</span>
    </div>
  );
};