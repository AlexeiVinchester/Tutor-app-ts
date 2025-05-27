export type TInitialStudentParamForLessonForm = {
  name: string;
  activity: boolean;
};

export type TInitialLessonParams = {
  studentsParams: TInitialStudentParamForLessonForm[];
  nextId: number;
};