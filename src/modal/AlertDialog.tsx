import ModalDialog from "./ModalDialog";

export interface AlertDialogData {
  title: string;
  bodyText?: string;
}

interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  bodyText?: string;
}

export default function AlertDialog({
  open,
  onClose,
  title,
  bodyText,
}: AlertDialogProps) {
  const handleModalClose = () => {
    onClose();
  };
  return (
    <ModalDialog
      open={open}
      title={title}
      onClose={handleModalClose}
      rigthBtn={{
        title: "OK",
        onClick: () => {
          onClose();
        },
      }}
    >
      <p>{bodyText}</p>
    </ModalDialog>
  );
}
