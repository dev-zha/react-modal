import { useState } from 'react';
import { AlertDialog } from './modal';

export default function ExampleAlertDialog() {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowModal = () => {
    setShowAlert(true);
  };

  return (
    <>
      <button type="button" className="btn" onClick={handleShowModal}>
        Show Alert Dialog
      </button>
      <AlertDialog
        open={showAlert}
        onClose={() => setShowAlert(false)}
        title={'This is just Alert'}
        bodyText={
          'Creating a custom Alert/Toast component in React without relying on an external UI library involves building a simple component that manages its own state.'
        }
      />
    </>
  );
}
