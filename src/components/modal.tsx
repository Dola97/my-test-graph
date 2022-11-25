import { Modal } from "@mantine/core";
import { FC, PropsWithChildren, useCallback } from "react";
import { useModal } from "../store";

type ModalComponentType = {
  state: any;
  modalName: string;
};
export const ModalComponent: FC<ModalComponentType & PropsWithChildren> = ({
  state,
  modalName,
  children,
}) => {
  const { setModal } = useModal();
  const _closeModal = useCallback(() => {
    setModal(false, modalName);
  }, [setModal, modalName]);
  return (
    <Modal
      opened={state}
      centered
      transition="fade"
      transitionDuration={600}
      transitionTimingFunction="ease"
      onClose={_closeModal}
      title="Introduce yourself!"
    >
      {children}
    </Modal>
  );
};
