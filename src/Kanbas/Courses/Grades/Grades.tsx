import { FaFilter, FaUpload, FaDownload, FaCog } from 'react-icons/fa';
import './index.css';

export default function Grades() {
  return (
    <div id="wd-grades" className="container mt-3">
      <div className="d-flex justify-content-end align-items-center mb-3">
        <button className="btn btn-outline-secondary me-2"><FaUpload /> Import</button>
        <div className="btn-group me-2">
          <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <FaDownload /> Export
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item">Export 1</button></li>
            <li><button className="dropdown-item">Export 2</button></li>
          </ul>
        </div>
        <button className="btn btn-outline-secondary"><FaCog /></button>
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="student-names">Student Names</label>
          <input id="student-names" type="text" className="form-control" placeholder="Search Students" />
        </div>
        <div className="col">
          <label htmlFor="assignment-names">Assignment Names</label>
          <input id="assignment-names" type="text" className="form-control" placeholder="Search Assignments" />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <button className="btn btn-secondary"><FaFilter /> Apply Filters</button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP</th>
              <th>A2 HTML</th>
              <th>A3 CSS</th>
              <th>A4 BOOTSTRAP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Adams</td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="96.67%" className="form-control" /></td>
              <td><input type="text" value="92.18%" className="form-control" /></td>
              <td><input type="text" value="66.22%" className="form-control" /></td>
            </tr>
            <tr>
              <td>Christina Allen</td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
            </tr>
            <tr>
              <td>Samreen Ansari</td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
            </tr>
            <tr>
              <td>Han Bao</td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="88.03%" className="form-control" /></td>
              <td><input type="text" value="98.99%" className="form-control" /></td>
            </tr>
            <tr>
              <td>Mahi Sai Srinivas Bobbili</td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="96.67%" className="form-control" /></td>
              <td><input type="text" value="98.37%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
            </tr>
            <tr>
              <td>Siran Cao</td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
              <td><input type="text" value="100%" className="form-control" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
