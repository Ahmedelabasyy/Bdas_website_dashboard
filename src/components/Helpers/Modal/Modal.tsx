import { FC, useState } from "react";
import "./Modal.scss";
import Button, { BtnStypeClass } from "../../Ui/Button";
import { IoCloseCircleOutline } from "react-icons/io5";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (data: any) => void;
  modalIcon?: any;
  modalTitle?: string;
  modalMsg?: string;
  closeBtnText?: string;
  confirmBtnText?: string;
  confirmBtnStyle?: BtnStypeClass;
  isTextArea?: any;
  name?: string;
  visitStatus?: string;
  loading?: boolean;
};

const Modal: FC<Props> = ({
  isOpen,
  onClose,
  onConfirm,
  modalIcon,
  modalTitle,
  modalMsg,
  closeBtnText,
  confirmBtnText,
  isTextArea,
  name,
  visitStatus,
  loading,
}) => {
  if (!isOpen) return null;

  const [reasonValue, setReasonValue] = useState("");

  // Update the state when the textarea value changes
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReasonValue(e.target.value);
  };

  // Modify the confirm callback to include the textarea value
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(reasonValue);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* {children} */}
        {visitStatus === "ongoing" && (
          <span className="closeIcon" onClick={onClose}>
            <IoCloseCircleOutline />
          </span>
        )}
        <img src={modalIcon} width={96} alt="trash" />
        <h5 className="title">{modalTitle}</h5>

        {name && visitStatus === "other" ? (
          <p className="msg">
            {modalMsg} {`“ ${name} “`} ?
          </p>
        ) : (
          <p className="msg">{modalMsg} </p>
        )}

        {isTextArea && (
          <div className="reason-container">
            <textarea
              className="reason-input"
              name="reason"
              onChange={handleTextareaChange}
            />
            <label className="reason-label" htmlFor="reason">
              reason
            </label>
          </div>
        )}

        {visitStatus !== "ongoing" && (
          <div className="row w-100">
            <div className="col-6">
              <Button
                text={confirmBtnText}
                styleType=""
                // onClick={onConfirm}
                onClick={handleConfirm}
                loading={loading}
              />
            </div>
            <div className="col">
              <Button
                text={closeBtnText}
                styleType="secondary"
                onClick={onClose}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
