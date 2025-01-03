import { CreateNewLessonForm } from '../../FSD/features/createNewLessonForm/createNewLessonForm';
import { StyledFormWrapper } from '../../FSD/shared/ui/StyledFormWrapper/styledFormWrapper';

const AboutAppPage = () => {
  return (
    <StyledFormWrapper>
      <CreateNewLessonForm nextId={33} />
    </StyledFormWrapper>
  );
};

export { AboutAppPage };
