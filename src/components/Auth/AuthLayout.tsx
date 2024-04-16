import { ComponentType, FC } from "react";
import "./AuthLayout.scss";
import logo from "../../assets/icons/logo.svg";
import intercomIcon from "../../assets/icons/logo.svg";
// import intercomIcon from "./../../assets/icons/kafdlogo.svg";
type ComponentWrapperProps = {
  WrappedComponent: ComponentType;
};

const AuthLayout: FC<ComponentWrapperProps> = ({ WrappedComponent }) => {
  return (
    <div className="layout-container">
      <div className="form-container">
        <div className="logo">
          <img style={{ width: "192px", height: "179px" }} src={logo} alt="" />
        </div>
        <WrappedComponent />
      </div>
      <div className="img-container d-none d-md-block">
        <img src={intercomIcon} alt="login" />
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default AuthLayout;
