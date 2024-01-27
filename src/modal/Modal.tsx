import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onBackdropClick?: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onBackdropClick, children }: ModalProps) {
  const handelClose = () => {
    if (onBackdropClick) {
      onBackdropClick();
    }
  };

  return open
    ? createPortal(
        <div
          onClick={handelClose}
          className="modal"
          // className="fixed top-0 right-0 left-0 bottom-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  bg-black/50 backdrop-blur-sm"
        >
          {children}
        </div>,
        document.body
      )
    : null;
}
