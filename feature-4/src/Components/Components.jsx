import Main from "./Main/Main";
import Stay from "./Stay/Stay";
import Activities from "./Activities/Activities";
import Header from "./Header/Header";
import Eat from "./Eat/Eat";
import Breakfast from "./Eat/Breakfast/Breakfast";
import Dinner from "./Eat/Dinner/Dinner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Header />
      <Routes>
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

