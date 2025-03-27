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
      client.invalidateQueries({ queryKey: ['currentMonthInfo'] });
    },
    [client]
  );

  return (
    <LessonsPageContextProvider updateAllData={updateAllData}>
      <Container
        className="pb-[50px] pt-[15px] !flex !flex-col !gap-4"
        maxWidth="lg"
      >
        <div className="flex gap-8">
          <LessonsBoard />
          <DebtorsBoard />
        </div>
        <CurrentMonthInfoBoard />
      </Container>
    </LessonsPageContextProvider>
  );
};
