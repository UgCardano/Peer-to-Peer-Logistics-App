import { ReactNode } from "react";
import { MdOutlineClose } from "react-icons/md";

import styles from "./modal.module.css";

interface ModalType {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ children, isOpen, onClose }: ModalType) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={onClose}>
          <MdOutlineClose />
        </span>
        <div className={styles.main}>{children}</div>
      </div>
    </div>
  );
}
