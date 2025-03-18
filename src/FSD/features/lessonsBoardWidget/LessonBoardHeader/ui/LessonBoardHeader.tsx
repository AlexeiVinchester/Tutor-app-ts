import { CardHeader } from "@mui/material"
import UpdateIcon from '@mui/icons-material/Update';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { useCallback } from "react";
import { useLessonsPageContext } from "../../../../entities/lesson/context/LessonPageContext/lib/useLessonsPageContext";
import { CreateNewLessonForm } from "../../createNewLessonForm/ui/createNewLessonForm";
import { useModalWindowContext } from "../../../../shared/context/modalWindowContext/lib/useModalWindowContext";
import { BoardHeaderStyledButton } from "../../../../shared/ui/BoardHeaderStyledButton/BoardHeaderSrtledButton";
import { TLoadLessonsRequestData } from "../../../../entities/lesson/model/loadInitialDataServerAnswer.type";

type TLessonBoardHeaderProps = {
  updateData: ({ page, perPage, name }: TLoadLessonsRequestData) => Promise<void>
};

export const LessonBoardHeader = ({ updateData }: TLessonBoardHeaderProps) => {
  const { updateAllData } = useLessonsPageContext();
  const { open } = useModalWindowContext();

  const handleClickAddNewLesson = useCallback(() => {
    open(<CreateNewLessonForm updateAllData={updateAllData} />, 'New lesson');
  }, [open, updateAllData]);

  const handleClickUpdate = () => () => updateData({});

  return (
    <CardHeader
      title={
        <h5 className="text-m font-bold flex items-center gap-2">
          Lessons board
        </h5>
      }
      subheader={
        <h5>Lessons for all period of time</h5>
      }
      action={
        <div className="flex items-center">
          <BoardHeaderStyledButton 
            icon={UpdateIcon} 
            onClick={handleClickUpdate()} 
            toolTipTitle="Update lessons"
            />
          <BoardHeaderStyledButton 
            icon={PostAddIcon} 
            onClick={handleClickAddNewLesson} 
            toolTipTitle="Add new lesson"
            />
        </div>
      }
    />
  );
};