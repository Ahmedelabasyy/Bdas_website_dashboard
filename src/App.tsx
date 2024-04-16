import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./Router/appRouter";
import { ToastContainer } from "react-toastify";
import { toastOptions } from "../src/utils";
function App() {
  return (
    <div style={{ width: "100%" }} className="d-flex justify-content-start">
      <AppRouter />
      <ToastContainer {...toastOptions} />
    </div>
  );
}

export default App;
