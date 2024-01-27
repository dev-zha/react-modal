import Modal from "./Modal";
import LoadingSpinner from "./LoadingSpinner";

interface ModalLoadingProps {
  show: boolean;
}

export default function ModalLoading({ show }: ModalLoadingProps) {
  return show ? (
    <Modal open={true}>
      <LoadingSpinner />
    </Modal>
  ) : null;
}
