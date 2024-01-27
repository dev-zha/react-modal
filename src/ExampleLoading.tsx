import { useState } from "react";
import {ModalLoading} from "./modal";

const LOADING_TIME = 3000; // 3 seconds

export default function ExampleLoading() {
  const [showLoading, setShowLoading] = useState(false);

  const handleShowModal = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
    }, LOADING_TIME);
  };

  return (
    <>
      <button type="button" className="btn" onClick={handleShowModal}>
        Show Loading
      </button>
      <ModalLoading show={showLoading} />
    </>
  );
}
