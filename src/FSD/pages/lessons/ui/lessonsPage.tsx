import { useCallback, useEffect, useState } from "react";
import { Container } from "@mui/material";
import { LessonsPageContextProvider } from "./LessonsPageContextProvider";
import { LessonsDebtors} from "../../../widgets/lessonsDebtors/ui/lessonsDebtors";
import { CurrentMonthInfoBoard } from "../../../widgets/currentMonthInfoBoard/ui/currentMonthInfoBoard";
import { LessonsTable } from "../../../features/lessonsBoardWidget/lessonsTable/ui/lessonsTable";
import { TLesson } from "../../../entities/lesson/model/lesson.type";
import { TInfoAboutLessonsCurrentMonth } from "../../../entities/lessonsInfoBoard/model/info.type";
import { loadCurrentMonthInfo } from "../../../entities/lessonsInfoBoard/api/loader";
import { loadDebtors } from "../../../entities/debtor/api/loaders";
import { TDebtor } from "../../../entities/debtor/model/debtor.type";
import { loadLessons } from "../../../entities/lesson/api/loaders";
import { createApiErrorMessage } from "../../../shared/api/createApiErrorMessage";
import { Spinner } from "../../../shared/ui/Spinner/Spinner";
import { useSnackMessageContext } from "../../../shared/context/snackMessageContext/lib/useSnackMessageContext";

export const LessonsPage = () => {
  const [isLoadingLessons, setIsLoadingLessons] = useState<boolean>(true);
  const [lessons, setLessons] = useState<TLesson[] | null>(null);
  const [isErrorLessons, setIsErrorLessons] = useState<boolean>(false);

  const [isLoadingDebtors, setIsLoadingDebtors] = useState<boolean>(true);
  const [debtors, setDebtors] = useState<TDebtor[] | null>(null);
  const [isErrorDebtors, setIsErrorDebtors] = useState<boolean>(false);

  const [isLoadingLessonsInfoBoard, setIsLoadingLessonInfoBoard] = useState<boolean>(true)
  const [lessonsInfoBoard, setLessonsInfoBoard] = useState<TInfoAboutLessonsCurrentMonth | null>(null)
  const [isErrorLessonsInfoBoard, setIsErrorLessonInfoBoard] = useState<boolean>(false);

  const { openSnackMessage } = useSnackMessageContext()


  const loadData = useCallback(async ({ updateLessons = false, updateDebtors = false, updateInfo = false }) => {
    if (updateLessons) {
      (async () => {
        console.log('Start loading of lessons')
        setIsLoadingLessons(true);
        setIsErrorLessons(false);
        try {
          const response = await loadLessons();
          setLessons(response);
        } catch (error) {
          openSnackMessage(createApiErrorMessage(error));
          setIsErrorLessons(true);
        } finally {
          setIsLoadingLessons(false);
        }
      })();
    }

    if (updateDebtors) {
      (async () => {
        console.log('Start loading of debtors');

        setIsLoadingDebtors(true);
        setIsErrorDebtors(false);
        try {
          const response = await loadDebtors();
          setDebtors(response);
        } catch (error) {
          openSnackMessage(createApiErrorMessage(error))
          setIsErrorDebtors(true);
        } finally {
          setIsLoadingDebtors(false);
        }
      })();
    }

    if (updateInfo) {
      (async () => {
        console.log('Start loading of info')

        setIsLoadingLessonInfoBoard(true);
        setIsErrorLessonInfoBoard(false);
        try {
          const response = await loadCurrentMonthInfo();
          setLessonsInfoBoard(response);
        } catch (error) {
          openSnackMessage(createApiErrorMessage(error));
          setIsErrorLessonInfoBoard(true);
        } finally {
          setIsLoadingLessonInfoBoard(false);
        }
      })();
    }
  }, [openSnackMessage]);

  const updateAllData = useCallback(() => loadData({ updateLessons: true, updateDebtors: true, updateInfo: true }), [loadData])
  const updateLessons = useCallback(() => loadData({ updateLessons: true }), [loadData]);
  const updateDebtors = useCallback(() => loadData({ updateDebtors: true }), [loadData]);
  const updateInfo = useCallback(() => loadData({ updateInfo: true }), [loadData]);

  console.log('new render of page lessons')

  useEffect(() => {
    updateAllData();
  }, [updateAllData]);

  if (isLoadingDebtors && isLoadingLessons && isLoadingLessonsInfoBoard) {
    return <Spinner />;
  }

  return (
    <LessonsPageContextProvider updateAllData={updateAllData}>
      <Container
        sx={{ paddingTop: '50px', paddingBottom: '50px' }}
        maxWidth="lg"
      >
        <div className="flex flex-row">
          <LessonsTable
            lessons={lessons}
            isLoading={isLoadingLessons}
            isError={isErrorLessons}
            updateData={updateLessons}
          />
          <div className="flex flex-col">
            <CurrentMonthInfoBoard
              data={lessonsInfoBoard}
              isLoading={isLoadingLessonsInfoBoard}
              isError={isErrorLessonsInfoBoard}
              updateData={updateInfo}
            />
            <LessonsDebtors
              data={debtors}
              isLoading={isLoadingDebtors}
              isError={isErrorDebtors}
              updateData={updateDebtors}
            />
          </div>
        </div>
      </Container>
    </LessonsPageContextProvider>
  );
};
