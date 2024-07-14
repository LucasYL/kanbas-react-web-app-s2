import { Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
export default function Kanbas() {
  return (
    <div id="wd-kanbas">
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
            <Routes>
            <Route path="/Courses/:id/*" element={<Courses />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/*" element={<Courses />} />
              <Route path="Calendar" element={<h3>Calendar</h3>} />
              <Route path="Inbox" element={<h3>Inbox</h3>} />
              <Route path="Account" element={<h3>Account</h3>} />
            </Routes>
    </div>
    </div>
);}

