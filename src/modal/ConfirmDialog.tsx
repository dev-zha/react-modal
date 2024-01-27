import ModalDialog from "./ModalDialog";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  leftBtnClick: () => void;
  rightBtnClick: () => void;
  children?: React.ReactNode;
}

export default function ConfirmDialog({
  open,
  title,
  leftBtnClick,
  rightBtnClick,
  children,
}: ConfirmDialogProps) {
  return (
    <ModalDialog
      open={open}
      title={title}
      closable={false}
      onClose={() => {}}
      leftBtn={{
        title: "Cancel",
        onClick: () => {
          leftBtnClick();
        },
      }}
      rigthBtn={{
        title: "OK",
        onClick: () => {
          rightBtnClick();
        },
      }}
    >
      {children}
    </ModalDialog>
  );
}
