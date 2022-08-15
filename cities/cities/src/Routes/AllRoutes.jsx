import { Route, Routes } from "react-router-dom";
import Private from "../Components/PrivateRoute";
import City from "./Citypage";
import Countries from "./Countries";
import Home from "./Home";
import Login from "./Login";

function AllRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Private>
            <Home />
          </Private>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/city/:id"
        element={
          <Private>
            <City />
          </Private>
        }
      />
      <Route
        path="/country/:name"
        element={
          <Private>
            <Countries />
          </Private>
        }
      />
    </Routes>
  );
}
export default AllRoutes;
