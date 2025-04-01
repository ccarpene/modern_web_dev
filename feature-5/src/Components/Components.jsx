import Main from "./Main/Main";
import Stay from "./Stay/Stay";
import Activities from "./Activities/Activities";
import Header from "./Header/Header";
import Eat from "./Eat/Eat";
import Breakfast from "./Eat/Breakfast/Breakfast";
import Dinner from "./Eat/Dinner/Dinner";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/" element={<Main />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/eat" element={<Eat />} />
        <Route path="/eat/breakfast" element={<Breakfast />} />
        <Route path="/eat/dinner" element={<Dinner />} />
      </Routes>
    </Router>
  );
}

