import { Button } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import { PaginationCircleButton } from "../PaginationCircleButton/PaginationCircleButton";
import { TPaginationParams } from "../../types/pagination";

type TPaginationContainerProps = {
  paginationParams: TPaginationParams;
  handleChangePage: (page: number) => void;
};

export const PaginationContainer = ({ paginationParams, handleChangePage }: TPaginationContainerProps) => {
  const { page, pages, prevPage, nextPage } = paginationParams;

  return (
    <div className="flex items-center justify-between mt-8">
      <div className="flex gap-3">
        {(prevPage && page !== 1) &&
          <Button className="!text-gray-400 hover:!text-main-turquoise" onClick={() => handleChangePage(prevPage)}><WestIcon /> Back</Button>
        }
        <PaginationCircleButton onClick={() => handleChangePage(1)} value={1} disabled={page === 1} />
        {![1, 2, 3].includes(page) && <div className="self-end">...</div>}
        {(prevPage && prevPage !== 1) &&
          <PaginationCircleButton onClick={() => handleChangePage(prevPage)} value={prevPage} />
        }
        {(![1, pages].includes(page)) && <PaginationCircleButton value={page} disabled />}
        {(nextPage && nextPage !== pages) &&
          <PaginationCircleButton onClick={() => handleChangePage(nextPage)} value={nextPage} />
        }
        {![pages, pages - 1, pages - 2].includes(page) && <div className="self-end">...</div>}
        <PaginationCircleButton onClick={() => handleChangePage(pages)} value={pages} disabled={page === pages} />
        {nextPage &&
          <Button className="!text-gray-400 hover:!text-main-turquoise" onClick={() => handleChangePage(nextPage)}>Next<EastIcon /></Button>
        }
      </div>
      <span className="text-sm">{page} from {pages}</span>
    </div>
  );
};