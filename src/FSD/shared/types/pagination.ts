export type TPaginationParams = {
  pages: number;
  page: number;
  perPage: number;
  prevPage: number | null;
  nextPage: number | null;
  totalPages: number;
};

export type TPaginatedDataResponse<T> = {
  data: T[];
  totalItems: number;
  paginationParams: TPaginationParams;
};