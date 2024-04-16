import { FC } from "react";
import Input from "../Ui/Input/Input";
import Button from "../Ui/Button";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import AuthLayout from "./AuthLayout";
import { forgetPassword } from "../../services";
import { showToast } from "../../utils";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants";

const forgetPasswordValidationSchema = (t: any) => {
  return Yup.object().shape({
    email: Yup.string()
      .required(t("validation.emaiIsRequired"))
      .email(t("validation.invalidEmail")),
  });
};

const ForgetPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const sendOtp = async (email: string) => {
    try {
      const { data } = await forgetPassword(email);

      showToast(t("toasts.otpSentSuccessfully"), "success");
      if (data) {
        console.log("data", data);
        navigate(routes.SENDOTP, {
          state: { email: data?.email || formik.values.email },
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    enableReinitialize: true,
    validationSchema: () => forgetPasswordValidationSchema(t),
    onSubmit: async (values) => {
      console.log(values);
      await sendOtp(values.email);
    },
  });

  return (
    <div style={{ width: "100%", padding: "0 10%" }}>
      <div
        style={{
          fontSize: "20px",
          color: "var(--primary)",
          fontWeight: "bold",
          lineHeight: "37px",
        }}
        className="text-center py-1 "
      >
        {t("auth.forgotPass")}
      </div>
      <div
        style={{
          color: "var(--secondary)",
          fontSize: "16px",
          marginBottom: "10px",
          fontWeight: "400",
        }}
        className="text-center "
      >
        {t("auth.enterEmail")}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input
          required
          placeholder={t("placeholder.email")}
          type="email"
          labelName={t("auth.email")}
          name="email"
          formik={formik}
        />

        <Button text={t("auth.send")} type="submit" />
      </form>
    </div>
  );
};

const ForgetPassword: FC = () => {
  return <AuthLayout WrappedComponent={ForgetPasswordForm} />;
};

export default ForgetPassword;
