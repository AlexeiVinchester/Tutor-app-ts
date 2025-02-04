export const createNewLessonFormEndPoints: Readonly<Record<string, string>> = {
  loadInitialData: 'http://localhost:3002/getNamesAndNextId',
  sendNewLesson: 'http://localhost:3002/addLesson',
};