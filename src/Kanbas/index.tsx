import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="Courses/*" element={<Courses />} />
              <Route path="Calendar" element={<h3>Calendar</h3>} />
              <Route path="Inbox" element={<h3>Inbox</h3>} />
              <Route path="Account" element={<h3>Account</h3>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}

