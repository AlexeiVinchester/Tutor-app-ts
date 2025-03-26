import { useCallback } from "react";
import { Container } from "@mui/material";
import { LessonsPageContextProvider } from "./LessonsPageContextProvider";
import { CurrentMonthInfoBoard } from "../../../widgets/currentMonthInfoBoard/ui/currentMonthInfoBoard";
import { DebtorsBoard } from "../../../widgets/lessonsDebtors/ui/DebtorsBoard";
import { LessonsBoard } from "../../../widgets/lessonsBoard/ui/LessonsBoard";
import { useQueryClient } from "@tanstack/react-query";

export const LessonsPage = () => {
  const client = useQueryClient();

  const updateAllData = useCallback(
    () => {
      client.invalidateQueries({ queryKey: ['lessons'] });
      client.invalidateQueries({ queryKey: ['debtors'] });
      client.invalidateQueries({ queryKey: ['lessonsInfo'] });
    },
    [client]
  );

  return (
    <LessonsPageContextProvider updateAllData={updateAllData}>
      <Container
        sx={{ paddingTop: '15px', paddingBottom: '50px' }}
        maxWidth="lg"
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-8">
            <LessonsBoard />
            <DebtorsBoard />
          </div>
          <CurrentMonthInfoBoard />
        </div>
      </Container>
    </LessonsPageContextProvider>
  );
};
