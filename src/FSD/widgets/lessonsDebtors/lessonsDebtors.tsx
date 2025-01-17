import { useEffect, useState } from "react";
import { TLoaderData } from "../../shared/api/loaderData.type";
import { makeApiRequest } from "../../shared/api/makeApiRequest";
import { HTTPMethods } from "../../shared/api/httpMethods.enum";

type TDebtor = {
  name: string;
  debt: number;
  amount: number;
};

export const loadDebtors: TLoaderData<TDebtor[]> = async () => {
  const debtors: TDebtor[] = await makeApiRequest('/lessons/getDebtors', HTTPMethods.GET);
  return debtors;
};

export const LessonsDebtors = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<TDebtor[] | null>(null);

  useEffect(() => {
    (async () => {
      try{
        setIsLoading(true);
        const response = await loadDebtors();
        setData(response);
      } catch (error) {
        if(error instanceof Error){
          setError(error.message)
        } else {
          setError('Unknown error was occured!')
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <p>Loading od debtors...</p>
  }

  if(error){
    return <p>{error}</p>
  }

  return (
    <div>
      {data &&
        <div>
          {data.map(item => (
            <div>
              <p>Name: {item.name} - debt: {item.debt} - amount of lessons: {item.amount}</p>
            </div>
          ))}
        </div>}
    </div>
  );
};
