export type TInitialStudentParamForLessonForm = { 
  name: string;
  activity: 'active' | 'inactive';
};

export type TInitialLessonParams = {
  studentsParams: TInitialStudentParamForLessonForm[];
  nextId: number;
};