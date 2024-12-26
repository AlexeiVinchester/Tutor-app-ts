export interface ModalWindowProps {
  children: React.ReactNode;
  modalState: boolean;
  onClose: () => void;
  title: string;
}
