import { Container } from "@mui/material";
import { useCallback } from "react";
import { loadDebtors } from "../../FSD/entities/debtor/api/loaders";
import { loadLessons } from "../../FSD/entities/lesson/api/loaders";
import { TLoadLessonsRequestData } from "../../FSD/entities/lesson/model/loadInitialDataServerAnswer.type";
import { loadCurrentMonthInfo } from "../../FSD/entities/lessonsInfoBoard/api/loader";
import { defaultPaginationParams } from "../../FSD/pages/lessons/model/defaultPaginationParams";
import { TLoadPageDataParams } from "../../FSD/pages/lessons/model/loadPageDataParams";
import { LessonsPageContextProvider } from "../../FSD/pages/lessons/ui/LessonsPageContextProvider";
import { useLoadDataFromServer } from "../../FSD/shared/hooks/useLoadDataFromServer";
import { Spinner } from "../../FSD/shared/ui/Spinner/Spinner";
import { CurrentMonthInfoBoard } from "../../FSD/widgets/currentMonthInfoBoard/ui/currentMonthInfoBoard";
import { LessonsBoard } from "../../FSD/widgets/lessonsBoard/ui/LessonsBoard";
import { DebtorsBoard } from "../../FSD/widgets/lessonsDebtors/ui/DebtorsBoard";

const AboutAppPage = () => {
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
        <div className="flex flex-col gap-4">
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


export { AboutAppPage };
