import { useQuery } from "@tanstack/react-query";
import { loadInitialStudentParams } from "../api/loaders";

export const useInitialStudentData = () => {
  const {
    data: initialStudentsData,
    isError: isErrorInitialStudentParams,
    isLoading: isLoadingInitialStudentParams
  } = useQuery({
    queryFn: () => loadInitialStudentParams(),
    queryKey: ['initialStudentsParams']
  });

  return {
    initialStudentsData,
    isErrorInitialStudentParams,
    isLoadingInitialStudentParams
  };
};