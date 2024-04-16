import { useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import routes from "./constants/routes";

import type { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/reducers/rootReducer";

const PrivateRoute: FC<{
  children: JSX.Element;
}> = ({ children }) => {
  const location = useLocation();

  const { user: reduxUser } = useSelector((state: RootState) => state.auth);

  const userData = useMemo(() => {
    if (!reduxUser) return false;

    return true;
  }, [reduxUser]);

  if (!userData)
    return <Navigate to={routes.LOGIN} state={{ from: location }} replace />;

  return children;
};

export default PrivateRoute;
