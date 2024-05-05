import { ReactNode, useState } from "react";
import Modal from "../ui/modal";

export function useModal(children: ReactNode) {
  const [open, setOpen] = useState(false);

  return {
    modal: (
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        {children}
      </Modal>
    ),
    openModal: () => setOpen(true),
  };
}
