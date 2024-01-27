import ButtonContained from "./button/ButtonContained";
import ButtonOutline from "./button/ButtonOutline";
import Modal from "./Modal";

export interface ModalBtn {
  title: string;
  onClick?: () => void;
}

interface ModalDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
  rigthBtn: ModalBtn;
  leftBtn?: ModalBtn;
  closable?: boolean;
}

export default function ModalDialog({
  open,
  onClose,
  title,
  children,
  rigthBtn,
  leftBtn,
  closable = true,
}: ModalDialogProps) {
  const handleBackdropClick = () => {
    if (closable) {
      onClose();
    }
  };

  const handleCloseBtnClick = () => {
    onClose();
  };

  const handleRightBtnClick = () => {
    if (closable) {
      onClose();
    }
    if (rigthBtn.onClick) {
      rigthBtn.onClick();
    }
  };

  const handleLeftBtnClick = () => {
    if (closable) {
      onClose();
    }
    if (leftBtn?.onClick) {
      leftBtn.onClick();
    }
  };

  return (
    <Modal open={open} onBackdropClick={handleBackdropClick}>
      <div className="dialog-container">
        <div className="dialog-box">
          <div className="dailog-outer">
            <h3 className="dialog-title">{title}</h3>
            {closable && (
              <button
                type="button"
                onClick={handleCloseBtnClick}
                className="dialog-close-btn"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            )}
          </div>

          <div className="dialog-body">{children}</div>
          <div
            className={`dialog-action-box ${
              leftBtn
                ? "dialog-action-box-two-btn"
                : "dialog-action-box-one-btn"
            }`}
          >
            {leftBtn && (
              <ButtonOutline onClick={handleLeftBtnClick}>
                {leftBtn?.title}
              </ButtonOutline>
            )}
            <ButtonContained onClick={handleRightBtnClick}>
              {rigthBtn.title}
            </ButtonContained>
          </div>
        </div>
      </div>
    </Modal>
  );
}
