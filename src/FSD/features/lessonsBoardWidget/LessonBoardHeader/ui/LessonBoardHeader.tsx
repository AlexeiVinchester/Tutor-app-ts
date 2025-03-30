import { useCallback } from "react";
import { CardHeader } from "@mui/material"
import UpdateIcon from '@mui/icons-material/Update';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { CreateNewLessonForm } from "../../createNewLessonForm/ui/createNewLessonForm";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { useModalWindowContext } from "../../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { BoardStyledButton } from "../../../../shared/ui/BoardStyledButton/BoardStyledButton";
import { useUpdateDataByClick } from "../../../../shared/hooks/useUpdateDataByClick";

type TLessonBoardHeader = {
  isPendingUpdate: boolean;
};

export const LessonBoardHeader = ({ isPendingUpdate }: TLessonBoardHeader) => {
  const { updateAllData } = useLessonsPageContext();
  const { open } = useModalWindowContext();

  const handleClickUpdateLessons = useUpdateDataByClick(['lessons']);

  const handleClickAddNewLesson = useCallback(() => {
    open(
      <CreateNewLessonForm updateAllData={updateAllData} />,
      'New lesson'
    );
  }, [open, updateAllData]);

  return (
    <CardHeader
      title={<h5 className="font-bold flex items-center">Lessons board</h5>}
      subheader={<h5>Lessons for all period of time</h5>}
      action={
        <div className="flex items-center">
          <BoardStyledButton
            disabled={isPendingUpdate}
            icon={UpdateIcon}
            onClick={handleClickUpdateLessons}
            toolTipTitle="Update lessons"
          />
          <BoardStyledButton
            disabled={isPendingUpdate}
            icon={PostAddIcon}
            onClick={handleClickAddNewLesson}
            toolTipTitle="Add new lesson"
          />
        </div>
      }
    />
  );
};