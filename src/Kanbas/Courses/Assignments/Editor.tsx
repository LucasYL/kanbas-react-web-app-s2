import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import './index.css';
import { useDispatch } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import * as client from './client';

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
  const [assignment, setAssignment] = useState<Assignment>({} as Assignment);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(100);
  const [dueDate, setDueDate] = useState("2024-05-13");
  const [availableFrom, setAvailableFrom] = useState("2024-05-06");
  const [availableUntil, setAvailableUntil] = useState("2024-05-20");

  const fetchAssignment = async () => {
    if (isEditing) {
      const fetchedAssignment = await client.findAssignment(lastPathPart);
      setAssignment(fetchedAssignment);
      setTitle(fetchedAssignment.title || "");
      setDescription(fetchedAssignment.description || "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.");
      setPoints(fetchedAssignment.points || 100);
      setDueDate(fetchedAssignment.dueDate || "2024-05-13");
      setAvailableFrom(fetchedAssignment.availableFrom || "2024-05-06");
      setAvailableUntil(fetchedAssignment.availableUntil || "2024-05-20");
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, [lastPathPart]);

  const handleSave = async () => {
    const newAssignment = {
      _id: isEditing ? assignment._id : new Date().getTime().toString(),
      title, description, points, dueDate, availableFrom, availableUntil, course: cid
    };

    if (isEditing) {
      await client.updateAssignment(newAssignment);
      dispatch(updateAssignment(newAssignment));
    } else {
      await client.createAssignment(cid as string, newAssignment);
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
