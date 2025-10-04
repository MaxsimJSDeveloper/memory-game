import ReactDOM from "react-dom";
import Icon from "../Icon";
import { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          <Icon id="icon-close" width="16" height="16" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")!
  );
};

export default Modal;
