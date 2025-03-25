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
    <div className="flex items-center justify-between mt-8">
      <div className="flex gap-3">
        {(prevPage && page !== 1) &&
          <Button className="!text-gray-400 hover:!text-main-turquoise" onClick={handleClickPage(prevPage)}><WestIcon /> Back</Button>
        }
        <PaginationCircleButton onClick={handleClickPage(1)} value={1} disabled={page === 1} />
        {![1, 2, 3].includes(page) && <div className="self-end">...</div>}
        {(prevPage && prevPage !== 1) &&
          <PaginationCircleButton onClick={handleClickPage(prevPage)} value={prevPage} />
        }
        {(![1, pages].includes(page)) && <PaginationCircleButton value={page} disabled />}
        {(nextPage && nextPage !== pages) &&
          <PaginationCircleButton onClick={handleClickPage(nextPage)} value={nextPage} />
        }
        {![pages, pages - 1, pages - 2].includes(page) && <div className="self-end">...</div>}
        <PaginationCircleButton onClick={handleClickPage(pages)} value={pages} disabled={page === pages} />
        {nextPage &&
          <Button className="!text-gray-400 hover:!text-main-turquoise" onClick={handleClickPage(nextPage)}>Next<EastIcon /></Button>
        }
      </div>
      <span className="text-sm">{page} from {pages}</span>
    </div>
  );
};