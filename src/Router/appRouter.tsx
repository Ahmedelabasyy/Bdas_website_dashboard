import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../constants";
import {
  AddNewCustomer,
  AddNewPartner,
  AddNewProduct,
  ContactUs,
  Customers,
  EditHardware,
  EditProjects,
  EditSoftware,
  Hardware,
  Home,
  Partners,
  Projects,
  Software,
  ViewContactus,
  ViewCustomer,
  ViewPartner,
  ViewProject,
} from "../pages";
import PrivateRoute from "../PrivateRoute";
import Layout from "../layout/Layout";
import Login from "../components/Auth/Login";
import ForgetPassword from "../components/Auth/ForgetPassword";
import OTPComponent from "../components/Auth/OTP";
import NewPassword from "../components/Auth/NewPassword";

const AppRouter: FC = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path={routes.HOME}>
            <Route index element={<Home />} />
          </Route>
          <Route path={routes.SOFTWARE}>
            <Route index element={<Software />} />
            <Route path="editsoftware/:id" element={<EditSoftware />} />
          </Route>
          <Route path={routes.HARDWARE}>
            <Route index element={<Hardware />} />
            <Route path="addnewhardware" element={<AddNewProduct />} />
            <Route path="edithardware/:id" element={<EditHardware />} />
          </Route>
          <Route path={routes.PARTNERS}>
            <Route index element={<Partners />} />
            <Route path=":id" element={<ViewPartner />} />
            <Route path="addnewpartner" element={<AddNewPartner />} />
          </Route>
          <Route path={routes.CUSTOMERS}>
            <Route index element={<Customers />} />
            <Route path=":id" element={<ViewCustomer />} />
            <Route path="addnewcustomer" element={<AddNewCustomer />} />
          </Route>
          <Route path={routes.PROJECTS}>
            <Route index element={<Projects />} />
            <Route path=":id" element={<ViewProject />} />
            <Route path="editprojects/:id" element={<EditProjects />} />
          </Route>
          <Route path={routes.CONTACTUS}>
            <Route index element={<ContactUs />} />
            <Route path=":id" element={<ViewContactus />} />
          </Route>
        </Route>
        {/* auth routes */}
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.FORGETPASSWORD} element={<ForgetPassword />} />
        <Route path={routes.SENDOTP} element={<OTPComponent />} />
        <Route path={routes.NEWPASSWORD} element={<NewPassword />} />
      </Routes>
    </>
  );
};

export default AppRouter;
