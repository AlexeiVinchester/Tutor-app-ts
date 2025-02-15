import { useCallback, useEffect, useState } from "react";
import { LessonsDebtors, loadDebtors, TDebtor } from "../../../widgets/lessonsDebtors/lessonsDebtors";
import { TLesson } from "../../../entities/lesson/model/lesson.type";
import { TInfoAboutLessonsCurrentMonth } from "../../../widgets/currentMonthInfoBoard/model/info.type";
import { loadCurrentMonthInfo } from "../../../widgets/currentMonthInfoBoard/api/loader";
import { TLoaderData } from "../../../shared/types/loaderData.type";
import { makeApiRequest } from "../../../shared/api/makeApiRequest";
import { endPoints } from "../../../entities/lesson/api/endPoints";
import { HTTPMethods } from "../../../shared/types/httpMethods.enum";
import { useSnackMessageContext } from "../../../shared/context/snackMessageContext/lib/useSnackMessageContext";
import { createApiErrorMessage } from "../../../shared/api/createApiErrorMessage";
import { LessonsTable } from "../../../features/lessonsContainerWidget/lessonsTable/ui/lessonsTable";
import { Spinner } from "../../../shared/ui/Spinner/Spinner";
import { CurrentMonthInfoBoard } from "../../../widgets/currentMonthInfoBoard/ui/currentMonthInfoBoard";
import { Container } from "@mui/material";

export const loadLessons: TLoaderData<TLesson[]> = async () => {
  const lessons: TLesson[] = await makeApiRequest(
    endPoints.loadLessons,
    HTTPMethods.GET
  )
  return lessons;
}

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

  const updateLessons = useCallback(() => loadData({ updateLessons: true }), [loadData]);
  const updateDebtors = useCallback(() => loadData({ updateDebtors: true }), [loadData]);
  const updateInfo = useCallback(() => loadData({ updateInfo: true }), [loadData]);

  console.log('new render of page lessons')
  useEffect(() => {
    loadData({ updateLessons: true, updateDebtors: true, updateInfo: true })
  }, [loadData]);

  if (isLoadingDebtors && isLoadingLessons && isLoadingLessonsInfoBoard) {
    return <Spinner />;
  }

  return (
    <div>
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

    </div>
  );
};
