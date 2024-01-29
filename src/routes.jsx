import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AppForm from "./pages/form";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {["/"].map((path, id) => (
          <Route key={id} exact path={path} element={<Home />} />
        ))}
        <Route path="/form" element={<AppForm />} />
        <Route path="*" element={`No Route Found`} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
