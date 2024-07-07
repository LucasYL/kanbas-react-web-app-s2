import { Link } from 'react-router-dom';
export default function Assignments() {
    return (
        <div id="wd-assignments">
          <input id="wd-search-assignment" placeholder="Search for Assignments" />
          <button id="wd-add-assignment-group">+ Group</button>
          <button id="wd-add-assignment">+ Assignment</button>
          <h3 id="wd-assignments-title">
            ASSIGNMENTS 40% of Total <button>+</button>
          </h3>
          <ul id="wd-assignment-list">
            <li className="wd-assignment-list-item">
              <Link className="wd-assignment-link" to="AssignmentsEditor">
                A1 - ENV + HTML
              </Link>
              <div>Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts</div>
            </li>
            <li className="wd-assignment-list-item">
              <Link className="wd-assignment-link" to="AssignmentsEditor">
                A2 - CSS + BOOTSTRAP
              </Link>
              <div>Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts</div>
            </li>
            <li className="wd-assignment-list-item">
              <Link className="wd-assignment-link" to="AssignmentsEditor">
                A3 - JAVASCRIPT + REACT
              </Link>
              <div>Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts</div>
            </li>
          </ul>
        </div>
      );
    }