import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
  text: string;
  link?: string;
};

type CustomBreadcrumbProps = {
  items: BreadcrumbItem[];
};

const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({ items }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "ar" || i18n.language === "he"; // Add other RTL languages as needed

  return (
    <Breadcrumb dir={isRtl ? "rtl" : "ltr"}>
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;
        const hasLink = !!item.link;

        return (
          <React.Fragment key={index}>
            {!isRtl && index > 0 && (
              <span
                style={{ color: "var(--secondary)" }}
                className="breadcrumb-separator mx-1"
              >
                {" "}
                /{" "}
              </span>
            )}
            <Breadcrumb.Item
              active={isLastItem}
              linkAs={hasLink ? Link : "span"}
              linkProps={hasLink ? { to: item.link } : {}}
              style={{ cursor: hasLink ? "pointer" : "default" }}
            >
              {item.text}
            </Breadcrumb.Item>
            {isRtl && !isLastItem && (
              <span
                className="breadcrumb-separator mx-1"
                style={{ color: "var(--secondary)" }}
              >
                {" "}
                /{" "}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;
