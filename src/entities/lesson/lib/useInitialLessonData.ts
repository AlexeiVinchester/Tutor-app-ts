import { useQuery } from "@tanstack/react-query";
import { loadInitialData } from "../api/loaders";
import { createApiErrorMessage } from "../../../shared/api/createApiErrorMessage";
import { useSnackMessageContext } from "../../../shared/context/snackMessageContext/lib/useSnackMessageContext";

export const useInitialLessonData = () => {
  const { openSnackMessage } = useSnackMessageContext();

  const {
    data: initialLessonData,
    isLoading: isPendingInitialData,
    isError: isErrorInitialData
  } = useQuery({
    queryKey: ['initialLessonFormData'],
    queryFn: async () => {
      try {
        const data = await loadInitialData();
        return data;
      } catch (error) {
        openSnackMessage(createApiErrorMessage(error));
      }
    },
  });

  return {
    initialLessonData,
    isPendingInitialData,
    isErrorInitialData
  };
};