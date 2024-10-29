export interface AddNewLessonContainerProps {
    isOpenCreateLessonWindow: boolean;
    closeCreateLessonWindow: () => void;
    amount: number;
    showSnackBar: (message: string, severity: 'success' | 'error') => void;
};