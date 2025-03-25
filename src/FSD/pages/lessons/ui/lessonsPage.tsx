import { useCallback } from "react";
import { Container } from "@mui/material";
import { LessonsPageContextProvider } from "./LessonsPageContextProvider";
import { defaultPaginationParams } from "../model/defaultPaginationParams";
import { TLoadPageDataParams } from "../model/loadPageDataParams";
import { CurrentMonthInfoBoard } from "../../../widgets/currentMonthInfoBoard/ui/currentMonthInfoBoard";
import { DebtorsBoard } from "../../../widgets/lessonsDebtors/ui/DebtorsBoard";
import { LessonsBoard } from "../../../widgets/lessonsBoard/ui/LessonsBoard";
import { TLoadLessonsRequestData } from "../../../entities/lesson/model/loadInitialDataServerAnswer.type";
import { loadCurrentMonthInfo } from "../../../entities/lessonsInfoBoard/api/loader";
import { loadDebtors } from "../../../entities/debtor/api/loaders";
import { loadLessons } from "../../../entities/lesson/api/loaders";
import { Spinner } from "../../../shared/ui/Spinner/Spinner";
import { useLoadDataFromServer } from "../../../shared/hooks/useLoadDataFromServer";

export const LessonsPage = () => {
  const {
    data: loadLessonsResponse,
    isLoading: isLoadingLessons,
    isError: isErrorLessons,
    loadData: asyncLoadLessons
  } = useLoadDataFromServer(loadLessons);

  const {
    data: debtors,
    isLoading: isLoadingDebtors,
    isError: isErrorDebtors,
    loadData: asyncLoadDebtors
  } = useLoadDataFromServer(loadDebtors);

  const {
    data: lessonsInfoBoard,
    isLoading: isLoadingLessonsInfoBoard,
    isError: isErrorLessonsInfoBoard,
    loadData: asyncLoadCurrentMonthInfo
  } = useLoadDataFromServer(loadCurrentMonthInfo);

  const loadData = useCallback(
    async (params: TLoadPageDataParams) => {
      const {
        updateLessons = false,
        updateDebtors = false,
        updateInfo = false,
        lessonsRequestParams = {}
      } = params;

      if (updateLessons) asyncLoadLessons(lessonsRequestParams);
      if (updateDebtors) asyncLoadDebtors();
      if (updateInfo) asyncLoadCurrentMonthInfo();
    },
    [asyncLoadCurrentMonthInfo, asyncLoadDebtors, asyncLoadLessons]
  );

  const updateLessons = useCallback(
    ({ page, perPage, name }: TLoadLessonsRequestData) =>
      loadData({
        updateLessons: true,
        lessonsRequestParams: {
          page, perPage, name
        }
      }),
    [loadData]);

  const updateDebtors = useCallback(
    () => loadData({ updateDebtors: true }),
    [loadData]
  );

  const updateInfo = useCallback(
    () => loadData({ updateInfo: true }),
    [loadData]
  );

  const updateAllData = useCallback(
    () => loadData({ updateLessons: true, updateDebtors: true, updateInfo: true }),
    [loadData]
  );

  if (isLoadingDebtors && isLoadingLessons && isLoadingLessonsInfoBoard) {
    return <Spinner />;
  }

  return (
    <LessonsPageContextProvider updateAllData={updateAllData}>
      <Container
        sx={{ paddingTop: '15px', paddingBottom: '50px' }}
        maxWidth="lg"
      >
        <div className="flex flex-col">
          <div className="flex gap-8">
            <LessonsBoard
              paginationParams={loadLessonsResponse?.paginationParams ?? defaultPaginationParams}
              lessons={loadLessonsResponse?.data}
              isLoading={isLoadingLessons}
              isError={isErrorLessons}
              updateData={updateLessons}
            />
            <DebtorsBoard
              data={debtors}
              isLoading={isLoadingDebtors}
              isError={isErrorDebtors}
              updateDebtors={updateDebtors}
            />
          </div>
          <CurrentMonthInfoBoard
            data={lessonsInfoBoard}
            isLoading={isLoadingLessonsInfoBoard}
            isError={isErrorLessonsInfoBoard}
            updateData={updateInfo}
          />
        </div>
      </Container>
    </LessonsPageContextProvider>
  );
};
