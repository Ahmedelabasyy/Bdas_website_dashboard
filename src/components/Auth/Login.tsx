import { FC, useEffect } from "react";
import AuthLayout from "./AuthLayout";
import Input from "../Ui/Input/Input";
import { useFormik } from "formik";
import InputPassword from "../Ui/Input/InputPassword";
import Button from "../Ui/Button";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import { showToast } from "../../utils";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../constants";
import { login } from "../../store/reducers/auth-slice";
import { AppDispatch } from "../../store/store";
import { TFunction } from "i18next";
import { Form, Spinner } from "react-bootstrap";

const loginValidationSchema = (t: TFunction<"translation", undefined>) => {
  return Yup.object().shape({
    email: Yup.string()
      .required(t("validation.emaiIsRequired"))
      .email(t("validation.invalidEmail")),
    password: Yup.string()
      .required(t("validation.passwordIsRequired"))
      .min(8, t("validation.passwordMinLength", { min: 8 }))
      .matches(/[a-z]/, t("validation.lowercaseRequired"))
      .matches(/[A-Z]/, t("validation.uppercaseRequired"))
      .matches(/[^a-zA-Z0-9]/, t("validation.specialCharRequired")),
  });
};

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = localStorage.getItem("token");
  const {
    isLoggedIn,
    user,
    loading,
    error,
    // user, isLoading, isError, isSuccess, message
  } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (error) {
      // console.log("error", error);
    }
    if (isLoggedIn && user && token) {
      navigate(routes.HOME);
      console.log("toastssssssssssssssssssssssssssssssssssssssssssssssss");
      showToast(t("toasts.successLogin"), "success");
    }
  }, [user, error, isLoggedIn, loading, dispatch]);

  const submitForm = async (payload: any) => {
    dispatch(login(payload));
    //
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      type: "admin",
    },
    enableReinitialize: true,
    validationSchema: () => loginValidationSchema(t),
    onSubmit: async (values) => {
      submitForm(values);
    },
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={{ width: "100%", padding: "0 10%", marginTop: "10px" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit();
        }}
      >
        <Input
          required
          type="email"
          labelName={t("auth.email")}
          name="email"
          placeholder={t("placeholder.email")}
          formik={formik}
        />

        <InputPassword
          className=""
          required
          labelName={t("auth.password")}
          name="password"
          placeholder={t("placeholder.password")}
          formik={formik}
        />

        <div className="forget-password mb-3 d-flex justify-content-between">
          <div>
            <Form.Check
              // style={{ backgroundColor: "var(--primary)" }}
              type="checkbox"
              label={t("auth.rememberMe")}
              id="custom-checkbox"
              className="custom-checkbox"
            />
          </div>
          <NavLink to={routes.FORGETPASSWORD}>
            {t("auth.forgotPassword")}
          </NavLink>
        </div>

        <Button
          style={{ backgroundColor: "var(--primaryColor)" }}
          text={t("auth.signin")}
          type="submit"
        />
      </form>
    </div>
  );
};

const Login: FC = () => {
  return <AuthLayout WrappedComponent={LoginForm} />;
};

export default Login;
