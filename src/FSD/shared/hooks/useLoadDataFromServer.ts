import { useState, useEffect } from "react";
import { createApiErrorMessage } from "../api/createApiErrorMessage";
import { useSnackMessageContext } from "../context/snackMessageContext/lib/useSnackMessageContext";
import { TLoaderData } from "../types/loaderData.type";

export const useLoadDataFromServer = <T, P = void>(loader: TLoaderData<T, P>, params?: P) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const { openSnackMessage } = useSnackMessageContext();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await loader(params);
        setData(data);
      } catch (error) {
        openSnackMessage(createApiErrorMessage(error))
        setIsError(true)
      } finally {
        setIsLoading(false);
      }
    })();
  }, [loader, openSnackMessage, params]);

  return {
    data,
    setData,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    openSnackMessage
  };
}