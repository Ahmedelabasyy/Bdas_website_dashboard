import { FC } from "react";
import "./Modal.scss";
import Button, { BtnStypeClass } from "../../Ui/Button";

type Props = {
  isOpen: boolean;
  //   onClose: () => void;
  onConfirm?: () => void;
  modalIcon?: any;
  modalTitle?: string;
  modalMsg?: string;
  //   closeBtnText?: string;
  confirmBtnText?: string;
  confirmBtnStyle?: BtnStypeClass;
};

const Modal: FC<Props> = ({
  isOpen,
  //   onClose,
  onConfirm,
  modalIcon,
  modalTitle,
  modalMsg,
  //   closeBtnText,
  confirmBtnText,
  confirmBtnStyle,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      //  onClick={onClose}
    >
      <div className="modal-container p-0" onClick={(e) => e.stopPropagation()}>
        {/* {children} */}
        <img src={modalIcon} width={96} alt="trash" />
        <h5 className="title ">{modalTitle}</h5>

        <p className="msg successMessage ">{modalMsg}</p>

        <div className="row w-100 ">
          <div className="col-12">
            <Button
              className="py-3"
              text={confirmBtnText}
              styleType={confirmBtnStyle}
              onClick={onConfirm}
            />
          </div>
          {/* <div className="col">
            <Button
              text={closeBtnText}
              styleType="secondary"
              onClick={onClose}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
