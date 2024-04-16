import { Dropdown, Stack } from "react-bootstrap";
import "./actions.scss";
import actionsIcon from "../../../assets/icons/Vector.svg";
import { FC, SVGProps } from "react";
import { MdEdit, MdDeleteForever, MdOutlineCancel } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { FaClone } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa6";
import { i18n } from "../../../utils";

export function MdiAccountCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m21.1 12.5l1.4 1.41l-6.53 6.59L12.5 17l1.4-1.41l2.07 2.08zM10 17l3 3H3v-2c0-2.21 3.58-4 8-4l1.89.11zm1-13a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"
      ></path>
    </svg>
  );
}

export function MdiEmailResend(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#28334A"
        d="M3 4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h10.5a6.5 6.5 0 0 1-.5-2.5a6.5 6.5 0 0 1 6.5-6.5a6.5 6.5 0 0 1 1.5.18V6a2 2 0 0 0-2-2zm0 2l8 5l8-5v2l-8 5l-8-5zm16 6l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4zm-3.33 3.29c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5V20a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12z"
      ></path>
    </svg>
  );
}
export function MdiAccountRemove(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="#ff0000"
        d="M15 14c2.67 0 8 1.33 8 4v2H7v-2c0-2.67 5.33-4 8-4m0-2a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4M5 9.59l2.12-2.13l1.42 1.42L6.41 11l2.13 2.12l-1.42 1.42L5 12.41l-2.12 2.13l-1.42-1.42L3.59 11L1.46 8.88l1.42-1.42z"
      ></path>
    </svg>
  );
}
type actionProps = {
  onEdit?: () => void;
  onView?: () => void;
  onSuspend?: () => void;
  onDelete?: (row: any) => void;
  onAccept?: () => void;
  onReject?: () => void;
  onActive?: () => void;
  onCancel?: () => void;
  onResend?: () => void;
  onClone?: () => void;
  row?: any;
};
const ActionsMenu: FC<actionProps> = ({
  onEdit,
  onView,
  onAccept,
  onDelete,
  onReject,
  onSuspend,
  onActive,
  onCancel,
  onResend,
  onClone,
}) => {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: i18n.language === "en" ? "right" : "left" }}>
      <Dropdown className="no-arrow bg-transparent">
        <Dropdown.Toggle id="dropdown-basic">
          <img src={actionsIcon} alt="actionsIcon" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {onView && (
            <Dropdown.Item onClick={onView}>
              <Stack
                direction="horizontal"
                className="align-items-center"
                gap={2}
                style={{ color: "var(--darkPrimaryColor" }}
              >
                <IoMdEye />
                <span>{t("actions.view")}</span>
              </Stack>
            </Dropdown.Item>
          )}
          {onEdit && (
            <Dropdown.Item onClick={onEdit}>
              <Stack
                direction="horizontal"
                className="align-items-center"
                gap={2}
              >
                <MdEdit />
                <span>{t("actions.edit")}</span>
              </Stack>
            </Dropdown.Item>
          )}
          {onSuspend && (
            <Dropdown.Item onClick={onSuspend}>
              <Stack
                direction="horizontal"
                className="align-items-center"
                gap={2}
                style={{ color: "#5C5C5C" }}
              >
                <IoCloseCircleOutline />
                <span className="fw-normal">{t("actions.suspend")}</span>
              </Stack>
            </Dropdown.Item>
          )}

          {onActive && (
            <Dropdown.Item onClick={onActive}>
              <Stack
                direction="horizontal"
                className="align-items-center"
                gap={2}
                style={{ color: "#5C5C5C" }}
              >
                <FaCheck />
                <span className="fw-normal">{t("actions.active")}</span>
              </Stack>
            </Dropdown.Item>
          )}

          {onAccept && (
            <Dropdown.Item onClick={onAccept}>
              <Stack
                direction="horizontal"
                className="align-items-center"
                gap={2}
              >
                <MdiAccountCheck />
                <span>{t("actions.accept")}</span>
              </Stack>
            </Dropdown.Item>
          )}
          {onReject && (
            <Dropdown.Item onClick={onReject}>
              <Stack
                direction="horizontal"
                className="align-items-center"
                gap={2}
              >
                <MdiAccountRemove />
                <span style={{ color: "#ff0000" }}>{t("actions.reject")}</span>
              </Stack>
            </Dropdown.Item>
          )}
          {onCancel && (
            <Dropdown.Item onClick={onCancel}>
              <Stack
                style={{ color: "var(--error)" }}
                direction="horizontal"
                className="align-items-center"
                gap={2}
              >
                <MdOutlineCancel />
                <span>{t("actions.cancel")}</span>
              </Stack>
            </Dropdown.Item>
          )}
          {onResend && (
            <Dropdown.Item onClick={onResend}>
              <Stack
                style={{ color: "var(--primary)" }}
                direction="horizontal"
                className="align-items-center"
                gap={2}
              >
                <MdiEmailResend />
                <span>{t("actions.resend")}</span>
              </Stack>
            </Dropdown.Item>
          )}

          {onClone && (
            <Dropdown.Item onClick={onClone}>
              <Stack
                style={{ color: "var(--expired-status)" }}
                direction="horizontal"
                className="align-items-center"
                gap={2}
              >
                <FaClone />
                <span>{t("actions.clone")}</span>
              </Stack>
            </Dropdown.Item>
          )}
          {onDelete && (
            <Dropdown.Item onClick={onDelete}>
              <Stack
                direction="horizontal"
                className="align-items-center"
                gap={2}
                style={{ color: "var(--error" }}
              >
                <MdDeleteForever />
                <span>{t("actions.delete")}</span>
              </Stack>
            </Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ActionsMenu;
