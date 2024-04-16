import { FC, useEffect, useState } from "react";
import Button from "../Ui/Button";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import AuthLayout from "./AuthLayout";
import OTPInput from "otp-input-react";
import { useLocation, useNavigate } from "react-router-dom";
import { forgetPassword, sendOtp } from "../../services";
import { showToast } from "../../utils";
import { routes } from "../../constants";

const forgetPasswordValidationSchema = (t: any) => {
  return Yup.object().shape({
    email: Yup.string().required(t("validation.emailIsRequired")),
  });
};

const OTPForm: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  console.log("email", location.state);
  const formik = useFormik({
    initialValues: {
      email: location.state.email,
    },
    enableReinitialize: true,
    validationSchema: () => forgetPasswordValidationSchema(t),
    onSubmit: (values) => {
      submitOtp({ ...values, otp: OTP });
      formik.resetForm();
    },
  });

  const [OTP, setOTP] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(60); // 60 seconds

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const intervalId = setInterval(() => {
      setSecondsLeft((seconds) => seconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsLeft]);

  const formatTime = () => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  type OTP = { email: string; otp: string };
  const submitOtp = async (payload: OTP) => {
    try {
      const { data } = await sendOtp(payload);

      showToast(t("toasts.otpVerificationSuccess"), "success");
      if (data) {
        console.log("data", data);
        navigate(routes.NEWPASSWORD, {
          state: { email: data?.email || formik.values.email, otp: OTP },
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const resendOtp = async () => {
    try {
      const { data } = await forgetPassword(formik.values.email);

      showToast("send successfully", "success");
      setSecondsLeft(60);
      if (data) {
        console.log("data", data);
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div style={{ width: "100%", padding: "0 10%" }}>
      <div
        style={{
          fontSize: "20px",
          fontWeight: "700",
          marginTop: "10px",
          color: "var(--primary)",
        }}
        className="text-center font-weight-bold"
      >
        {t("auth.forgotPass")}
      </div>
      <div
        style={{
          fontSize: "12px",
          fontWeight: "400",
          color: "var(--secondary)",
        }}
        className="text-center pt-2 pb-1"
      >
        {t("auth.forgetMsg")}
      </div>

      <div
        style={{
          fontSize: "12px",
          fontWeight: "700",
          color: "var(--primary)",
        }}
        className="text-center pb-4"
      >
        {location.state.email}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <div className="d-flex justify-content-center mb-3">
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            inputClassName="focus-input"
            inputStyles={{
              border: "1px solid #c3c5c4",
              // padding: "25px",
              borderRadius: "10px",
              marginRight: "5px",
              width: "50px",
              height: "50px",
              margin: "0 14px",
            }}
          />
        </div>

        <div
          style={{
            fontSize: "14px",
            fontWeight: "700",
            color: "var(--primary)",
          }}
          className="text-center py-2"
        >
          {"0" + formatTime()}
        </div>
        <div
          className="text-center  pt-2 pb-3"
          style={{
            fontSize: "14px",
            fontWeight: "400",
            color: "var(--primary)",
          }}
        >
          {t("auth.confirmRecieveMessage")}
          <span
            onClick={
              secondsLeft > 0
                ? () => {}
                : () => {
                    resendOtp();
                  }
            }
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: `${
                secondsLeft > 0 ? "var(--secondary)" : "var(--secondary-sec)"
              }`,
              cursor: `${secondsLeft > 0 ? "" : "pointer"}`,
              textDecoration: "underline",
            }}
          >
            {t("auth.resend")}
          </span>
        </div>

        <Button
          text={t("auth.confirm")}
          type="submit"
          disabled={OTP.length < 4}
        />
      </form>
    </div>
  );
};

const OTPComponent: FC = () => {
  return <AuthLayout WrappedComponent={OTPForm} />;
};

export default OTPComponent;
