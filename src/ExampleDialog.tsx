import { useState } from 'react';
import { ConfirmDialog } from './modal';

export default function ExampleDialog() {
  const [showDialog, setShowDialog] = useState(false);

  const handleShowModal = () => {
    setShowDialog(true);
  };

  const handleCancel = () => {
    setShowDialog(false);
    alert('Cancel the process');
  };

  const handleConfrim = () => {
    setShowDialog(false);
    alert('Confrim the process');
  };
  return (
    <>
      <button type="button" className="btn" onClick={handleShowModal}>
        Show Confirm Dialog
      </button>
      <ConfirmDialog
        open={showDialog}
        title="Confirm Dialog"
        leftBtnClick={handleCancel}
        rightBtnClick={handleConfrim}
      >
        Are you sure you want to process this task? This action cannot be
        undone.
      </ConfirmDialog>
    </>
  );
}
