import { useCallback } from "react";
import { Container } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { CurrentMonthInfoBoard } from "../../../widgets/lessonsPage/currentMonthInfoBoard";
import { DebtorsBoard } from "../../../widgets/lessonsPage/lessonsDebtors";
import { LessonsBoard } from "../../../widgets/lessonsPage/lessonsBoard";
import { UpdatePageDataProvider } from "../../../shared/ui/UpdatePageDataProvider/UpdatePageDataProvider";

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
    <UpdatePageDataProvider updateAllData={updateAllData}>
      <Container
        className="pb-[50px] pt-[15px] !flex !flex-col !gap-4"
        maxWidth="lg"
      >
        <div className="flex gap-4">
          <LessonsBoard />
          <DebtorsBoard />
        </div>
        <CurrentMonthInfoBoard />
      </Container>
    </UpdatePageDataProvider>
  );
};
