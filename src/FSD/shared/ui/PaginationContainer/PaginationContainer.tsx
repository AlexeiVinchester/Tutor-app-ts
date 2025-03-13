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
    <div className="flex items-center justify-between mt-4">
      <div className="flex gap-3">
        <PaginationButton onClick={handleClickPage(1)} value={1} />
        {page !== 1 && <>...</>}
        {(prevPage !== 1 && prevPage) &&
          <PaginationButton onClick={handleClickPage(prevPage)} value={prevPage} />
        }
        {page !== 1 && <PaginationButton value={page} disabled />}
        {(nextPage && nextPage !== pages) &&
          <PaginationButton onClick={handleClickPage(nextPage)} value={nextPage} />
        }
        ...
        <PaginationButton onClick={handleClickPage(pages)} value={pages} />
      </div>
      <span className="text-sm">Page {page} of {pages} pages</span>
    </div>
  );
};