import React from "react";
import { Modal } from "@mui/material";
import { ContainBox } from "./styles";
import Form from "../form";

interface Props {
  show: boolean;
  handleClose: () => void;

  title: string;
}

const CustomModal: React.FC<Props> = ({
  show,
  handleClose,
  title,
}) => {
  return (
    <div>
      <Modal open={show} onClose={handleClose}>
        <ContainBox>
          <Form title={title} />
        </ContainBox>
      </Modal>
    </div>
  );
};

export default CustomModal;
