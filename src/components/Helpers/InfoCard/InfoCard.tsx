import { CSSProperties, FC } from "react";
import { Stack } from "react-bootstrap";

type infoCardProps = {
  heading: any;
  info: any;
  Icon?: any;
  primary?: boolean;
  noWrap?: boolean;
  onClick?: any;
  extraContent?: string;
};

const InfoCard: FC<infoCardProps> = ({
  heading,
  info,
  Icon,
  primary = true,
  noWrap = true,
  onClick,
  extraContent,
}) => {
  const addDesign = (): CSSProperties => {
    if (noWrap) {
      return {
        textTransform: "lowercase",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      };
    } else {
      return {
        wordWrap: "break-word",
      };
    }
  };

  return (
    <Stack
      direction="vertical"
      className="w-100 p-3 mb-3 rounded-2 justify-content-between align-items-between"
      style={{ backgroundColor: "var(--lighterGray)", minHeight: "80px" }}
      gap={1}
    >
      <Stack
        direction="horizontal"
        className="align-items-center justify-content-start"
        gap={2}
        style={{
          color: `${primary ? "var(--darkPrimaryColor)" : "var(--error)"}`,
        }}
      >
        {Icon}
        <h6 style={{ fontSize: "14px" }} className="m-0 p-0 fw-bold">
          {heading}
        </h6>
      </Stack>
      <div
        className="m-0"
        // style={{
        //   color: "var(--primary)",
        //   fontSize: "14px",
        // }}

        style={{
          ...addDesign(),
          maxWidth: "100%",

          fontSize: "14px",
          fontWeight: "400",
          color: "var(--primary)",

          // ,
        }}
      >
        {info}
        {extraContent && (
          <span
            style={{
              textDecorationLine: "underline",
              fontSize: "12px",
              fontWeight: "700",
              color: "var(--darkPrimaryColor)",
            }}
            role="button"
            onClick={onClick}
          >
            {extraContent}
          </span>
        )}
      </div>
    </Stack>
  );
};

export default InfoCard;
