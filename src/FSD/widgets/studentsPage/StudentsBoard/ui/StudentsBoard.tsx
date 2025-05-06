import { useQuery } from "@tanstack/react-query";
import { loadStudents } from "../../../../entities/student/api/loaders";

export const StudentsBoard = () => {
  const { data: students, isLoading, isError, isFetching } = useQuery({
    queryKey: ['students'],
    queryFn: () => loadStudents()
  });
  
  return (
    <div>

    </div>
  );
};

