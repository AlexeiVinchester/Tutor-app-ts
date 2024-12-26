import { createPortal } from 'react-dom';
import { ModalWindowProps } from './interface/ModalWindow.interface';

const ModalWindow = ({
  children,
  onClose,
  modalState,
  title,
}: ModalWindowProps) => {
  if (!modalState) return null;
  return createPortal(
    <div>
      <div
        className="fixed bg-black/70 top-0 bottom-0 right-0 left-0"
        onClick={onClose}
      />
      <div className="w-[500px] p-5 rounded-xl bg-white fixed top-10 left-1/2 -translate-x-1/2">
        <h3 className="text-2xl text-center mb-2">{title}</h3>
        {children}
      </div>
    </div>,
    document.body
  );
};

export { ModalWindow };
