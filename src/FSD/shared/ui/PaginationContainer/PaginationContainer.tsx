import { TPaginationParams } from "../../types/pagination";
import { PaginationButton } from "../PaginationButton/PaginationButton";

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
        <PaginationButton onClick={handleClickPage(1)} value={1} disabled={page === 1} />
        {page !== 1 && '...'}
        {(prevPage && prevPage !== 1) &&
          <PaginationButton onClick={handleClickPage(prevPage)} value={prevPage} />
        }
        {(![1, pages].includes(page)) && <PaginationButton value={page} disabled />}
        {(nextPage && nextPage !== pages) &&
          <PaginationButton onClick={handleClickPage(nextPage)} value={nextPage} />
        }
        {page !== pages && '...'}
        <PaginationButton onClick={handleClickPage(pages)} value={pages} disabled={page === pages} />
      </div>
      <span className="text-sm">Page {page} of {pages} pages</span>
    </div>
  );
};