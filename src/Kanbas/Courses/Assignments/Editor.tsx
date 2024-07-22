
import { useLocation } from 'react-router';
import './index.css';
import * as db from "../../Database";

export default function AssignmentEditor() {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const lastPathPart = pathParts[pathParts.length - 1];

  const assignment = db.assignments.find((assignment) => assignment._id === lastPathPart);

  return (
    <div id="wd-assignments-editor" className="container mt-3">  
      <div className="row mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" value={assignment?.title} className="form-control" readOnly />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea id="wd-description" className="form-control" rows={5}>
          The assignment is available online. 
          Submit a link to the landing page of your Web application running on Netlify. 
          The landing page should include the following: Your full name and section Links 
          to each of the lab assignments Link to the Kanbas application Links to all 
          relevant source code repositories The Kanbas application should include a link to 
          navigate back to the landing page.
        </textarea>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-points" className="form-label">Points</label>
        <input id="wd-points" type="number" value={100} className="form-control" />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        <select id="wd-group" className="form-control">
          <option>ASSIGNMENTS</option>
          <option>QUIZZES</option>
          <option>EXAMS</option>
          <option>PROJECT</option>
        </select>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        <select id="wd-display-grade-as" className="form-control">
          <option>Percentage</option>
          <option>Points</option>
        </select>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        <select id="wd-submission-type" className="form-control">
          <option>Online</option>
          <option>External Tool</option>
        </select>
      </div>
      <div className="row mb-3">
        <label className="form-label">Online Entry Options</label>
        <div className="form-check">
          <input type="checkbox" id="wd-text-entry" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-website-url" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="wd-file-upload" className="form-check-input" />
          <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
        <input id="wd-assign-to" value="Everyone" className="form-control" />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-due-date" className="form-label">Due</label>
        <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-available-from" className="form-label">Available from</label>
        <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-available-until" className="form-label">Until</label>
        <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
      </div>
      <div className="row mt-3">
        <div className="col-md-12 text-end">
          <button id="wd-cancel" className="btn btn-secondary me-2">Cancel</button>
          <button id="wd-save" className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
  );
}
