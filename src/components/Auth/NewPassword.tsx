import { FC, useState } from "react";
import AuthLayout from "./AuthLayout";
import { useFormik } from "formik";
import InputPassword from "../Ui/Input/InputPassword";
import Button from "../Ui/Button";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { changePassword } from "../../services";
import { showToast } from "../../utils";
import { routes } from "../../constants";
import MessageModal from "../../components/Helpers/Modal/MessageModal";
import success from "../../assets/icons/success.gif";

const loginValidationSchema = (t: any) => {
  return Yup.object().shape({
    password: Yup.string()
      .required(t("validation.passwordIsRequired"))
      .min(8, t("validation.passwordMinLength", { min: 8 }))
      .matches(/[a-z]/, t("validation.lowercaseRequired"))
      .matches(/[A-Z]/, t("validation.uppercaseRequired"))
      .matches(/[^a-zA-Z0-9]/, t("validation.specialCharRequired")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("validation.passwordsMatch"))
      .required(t("validation.confirmPasswordIsRequired")),
  });
};

const NewPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: location.state.email,
      otp: location.state.otp,
      password: "",
      confirmPassword: "",
    },
    enableReinitialize: true,
    validationSchema: () => loginValidationSchema(t),
    onSubmit: (values) => {
      console.log(values);
      submitChangePassword(values);
      formik.resetForm();
    },
  });

  type OTP = {
    email: string;
    otp: string;
    password: string;
    confirmPassword: string;
  };
  const submitChangePassword = async (payload: OTP) => {
    try {
      const { data } = await changePassword(payload);

      showToast(t("toasts.passwordChangedSuccessfully"), "success");
      if (data) {
        // console.log("data", data);
        // navigate(routes.LOGIN);
        setOpen(true);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div style={{ width: "100%", padding: "0 10%" }}>
      <p
        style={{
          fontSize: "20px",
          color: "var(--primary)",
          fontWeight: "bold",
        }}
        className="text-center py-1 "
      >
        {t("auth.newPassword")}
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <InputPassword
          required
          labelName={t("auth.newPassword")}
          placeholder={t("placeholder.newPassword")}
          name="password"
          formik={formik}
        />

        <InputPassword
          required
          placeholder={t("placeholder.confirmNewPassword")}
          labelName={t("auth.confirmPassword")}
          name="confirmPassword"
          formik={formik}
        />

        <Button text={t("auth.save")} type="submit" />
      </form>
      <MessageModal
        isOpen={open}
        confirmBtnText={`${t("actions.login")}`}
        onConfirm={() => {
          navigate(routes.LOGIN);
        }}
        modalIcon={success}
        modalMsg="password changes succcessfully"
      ></MessageModal>
    </div>
  );
};

const NewPassword: FC = () => {
  return <AuthLayout WrappedComponent={NewPasswordForm} />;
};

export default NewPassword;
