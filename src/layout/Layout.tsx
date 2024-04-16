import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import type { FC } from "react";
import { Spinner } from "react-bootstrap";
import { Sidebar } from "../components";

const Layout: FC = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Sidebar />
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
