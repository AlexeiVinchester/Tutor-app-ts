export type TInitialStudentParamForLessonForm = {
  name: string;
  activity: boolean;
  student_id: string;
};

export type TInitialLessonParams = {
  studentsParams: TInitialStudentParamForLessonForm[];
  nextId: number;
};