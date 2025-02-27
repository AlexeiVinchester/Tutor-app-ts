export const lessonsEndPoints: Readonly<Record<string, string>> = {
  loadLessons: '/lessons/getLessons',
  sendEditedLesson: '/lessons/editLesson',
  loadInitialData: '/lessons/getInitialFormData',
  sendNewLesson: '/lessons/addLesson',
  sendNewPaidStatus: '/lessons/changePaidStatus',
  loadCurrentMonthInfo: '/lessons/currentMonthInfo',
  payDebt: '/lessons/payDebt'
}