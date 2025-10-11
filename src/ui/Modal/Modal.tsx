import ReactDOM from "react-dom";
import Icon from "../Icon";
import { ReactNode, useEffect, useRef } from "react";
import styles from "./Modal.module.css";
import { FocusTrap } from "focus-trap-react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <FocusTrap active={isOpen}>
      <div className={styles.modalOverlay} onClick={onClose}>
        <div
          ref={modalRef}
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          aria-labelledby="modal-title"
        >
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close settings"
          >
            <Icon id="icon-close" width="16" height="16" stroke="#edf2f7" />
          </button>
          {children}
        </div>
      </div>
    </FocusTrap>,
    document.getElementById("portal-root")!
  );
};

export default Modal;
