import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import './index.css';
import * as db from "../../Database";
import { useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';

type Assignment = {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFrom?: string;
  availableUntil?: string;
  course: string;
};

export default function AssignmentEditor() {
  const { cid } = useParams<{ cid: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const pathParts = location.pathname.split('/');
  const lastPathPart = pathParts[pathParts.length - 1];
  const dispatch = useDispatch();
  
  const isEditing = lastPathPart !== "new";
  const assignment: Assignment = isEditing 
    ? (db.assignments.find((assignment: Assignment) => assignment._id === lastPathPart) || {} as Assignment)
    : {} as Assignment;

  const [title, setTitle] = useState(assignment.title || "");
  const [description, setDescription] = useState(assignment.description || "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.");
  const [points, setPoints] = useState(assignment.points || 100);
  const [dueDate, setDueDate] = useState(assignment.dueDate || "2024-05-13");
  const [availableFrom, setAvailableFrom] = useState(assignment.availableFrom || "2024-05-06");
  const [availableUntil, setAvailableUntil] = useState(assignment.availableUntil || "2024-05-20");

  const handleSave = () => {
    const newAssignment = {
      _id: isEditing ? assignment._id : new Date().getTime().toString(),
      title, description, points, dueDate, availableFrom, availableUntil, course: cid
    };
    
    if (isEditing) {
      dispatch(updateAssignment(newAssignment));
    } else {
      dispatch(addAssignment(newAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-3">  
      <div className="row mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea id="wd-description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" rows={5} />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-points" className="form-label">Points</label>
        <input id="wd-points" type="number" value={points} onChange={(e) => setPoints(Number(e.target.value))} className="form-control" />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-due-date" className="form-label">Due Date</label>
        <input type="date" id="wd-due-date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="form-control" />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-available-from" className="form-label">Available From</label>
        <input type="date" id="wd-available-from" value={availableFrom} onChange={(e) => setAvailableFrom(e.target.value)} className="form-control" />
      </div>
      <div className="row mb-3">
        <label htmlFor="wd-available-until" className="form-label">Available Until</label>
        <input type="date" id="wd-available-until" value={availableUntil} onChange={(e) => setAvailableUntil(e.target.value)} className="form-control" />
      </div>
      <div className="row mt-3">
        <div className="col-md-12 text-end">
          <button id="wd-cancel" className="btn btn-secondary me-2" onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}>Cancel</button>
          <button id="wd-save" className="btn btn-danger" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
