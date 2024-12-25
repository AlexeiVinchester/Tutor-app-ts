import dayjs from "dayjs";

export const defaultValues = {
    price: '30',
    lessonDate: dayjs().format("YYYY-MM-DD"),
    paidStatus: false,
    studentName: ''
}