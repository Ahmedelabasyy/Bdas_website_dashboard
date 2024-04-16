import React, { ChangeEvent } from "react";
import "./Input.scss";

type InputProps = {
  iconClick?: () => void;
  inputChange?: (value: string) => void;
  name: string;
  placeholder?: string;
  type: string;
  labelName?: string;
  icon?: string;
  isIcon?: boolean;
  value?: string | number;
  className?: string;
  pattern?: string;
  disabled?: boolean;
  autoComplete?: string;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeValue?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  formik?: any;
  style?: any;
  checked?: boolean;
  required?: boolean;
  inputMode?:
    | "text"
    | "none"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  max?: number;
  min?: number;
  isTextArea?: boolean;
  rows?: number;
};

const Input: React.FC<InputProps> = ({
  icon,
  isIcon,
  iconClick,
  disabled,
  inputChange,
  style,
  onChangeValue,
  checked,
  value,
  type,
  labelName,
  autoComplete,
  inputMode,
  formik,
  onChange,
  required,
  name,
  min = 0,
  max = 100,
  isTextArea = false,
  rows = 5,
  ...props
}) => {
  // console.log(
  //   "err",
  //   formik.errors[name],
  //   formik?.touched[name] && formik?.errors[name]
  // );
  return (
    <div className="input-container">
      {isTextArea ? (
        // <textarea {...props} rows={5} />
        <textarea
          rows={rows}
          value={formik?.values[name] || value}
          onChange={formik?.handleChange || onChange}
          onBlur={formik?.handleBlur || onblur}
          name={name}
          style={style}
          className={`${
            formik?.touched[name] && formik?.errors[name] && "input-error"
          } ${type && type === "checkbox" ? "input-checkbox" : "input-custom"}`}
          id=""
        />
      ) : (
        <input
          {...props}
          type={type || "text"}
          inputMode={inputMode || "text"}
          name={name}
          value={formik?.values[name] || value}
          onChange={formik?.handleChange || onChange}
          onBlur={formik?.handleBlur || onblur}
          checked={checked}
          disabled={disabled}
          autoComplete={autoComplete}
          min={min}
          max={max}
          style={style}
          className={`${
            formik?.touched[name] && formik?.errors[name] && "input-error"
          } ${type && type === "checkbox" ? "input-checkbox" : "input-custom"}`}
        />
      )}
      <div className="checkmark"></div>
      {labelName && (
        <label
          className={`"input-label" ${
            formik?.touched[name] && formik?.errors[name] && "label-error"
          }`}
        >
          <span className="mx-2">{labelName}</span>
          <span className="mt-1">{required && "*"}</span>
        </label>
      )}
      {isIcon ? (
        <img className="icon" src={icon} alt="icon" onClick={iconClick}></img>
      ) : null}

      <div className="error">
        {formik?.touched[name] && formik?.errors[name] ? (
          <span className="error" style={{ color: "red" }}>
            {formik?.errors[name]}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
