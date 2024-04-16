import { FC } from "react";
import "./sidebar.scss";
import logo from "../../../assets/icons/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { routes } from "../../../constants";
import { Stack } from "react-bootstrap";
import Button from "../Button";
import { BiLogOut } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { signout } from "../../../store/reducers/auth-slice";
const Sidebar: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="sidebar p-2 d-flex flex-column justify-content-start align-items-center">
      <img src={logo} alt="logo" className="my-3" />
      <Stack direction="vertical" className="justify-content-between py-3">
        <ul className="list-unstyled w-100 p-2 d-flex flex-column justify-content-between align-items-center gap-2">
          <li className="w-100">
            <NavLink
              className="w-100 d-block px-2 py-2 rounded-2 text-center"
              to={routes.HOME}
            >
              Home
            </NavLink>
          </li>
          <li className="w-100">
            <NavLink
              className="w-100 d-block px-2 py-2 rounded-2 text-center"
              to={routes.SOFTWARE}
            >
              Software
            </NavLink>
          </li>
          <li className="w-100">
            <NavLink
              className="w-100 d-block px-2 py-2 rounded-2 text-center"
              to={routes.HARDWARE}
            >
              Hardware
            </NavLink>
          </li>
          <li className="w-100">
            <NavLink
              className="w-100 d-block px-2 py-2 rounded-2 text-center"
              to={routes.PROJECTS}
            >
              Projects
            </NavLink>
          </li>
          <li className="w-100">
            <NavLink
              className="w-100 d-block px-2 py-2 rounded-2 text-center"
              to={routes.CONTACTUS}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="w-100">
            <NavLink
              className="w-100 d-block px-2 py-2 rounded-2 text-center"
              to={routes.PARTNERS}
            >
              Partners
            </NavLink>
          </li>
          <li className="w-100">
            <NavLink
              className="w-100 d-block px-2 py-2 rounded-2 text-center"
              to={routes.CUSTOMERS}
            >
              Customers
            </NavLink>
          </li>
        </ul>
        <Button
          text={t("sidebar.logout")}
          // icon={person}
          startIcon={<BiLogOut />}
          classStyle="logout-btn"
          onClick={() => {
            dispatch(signout());
            navigate(routes.LOGIN);
          }}
        />
      </Stack>
    </div>
  );
};

export default Sidebar;
