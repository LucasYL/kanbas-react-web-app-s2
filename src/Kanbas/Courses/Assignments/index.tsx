// src/Kanbas/Courses/Assignments/index.tsx
import { FaSearch, FaPlus } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import AssignmentControlButtons from './AssignmentControlButtons';
import './index.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAssignments, deleteAssignment } from './reducer';
import * as client from './client';

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments.filter((assignment: any) => assignment.course === cid));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, [fetchAssignments, cid]);

  return (
    <div id="wd-assignments" className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text"><FaSearch /></span>
          <input id="wd-search-assignment" type="text" className="form-control" placeholder="Search for Assignments" />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2"><FaPlus /> Group</button>
          <button id="wd-add-assignment" className="btn btn-danger" onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}><FaPlus /> Assignment</button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 p-3 ps-2 bg-light">
        <BsGripVertical style={{ marginRight: '6px' }} />
        <h3 id="wd-assignments-title" className="d-flex align-items-center">
          ASSIGNMENTS
        </h3>
        <button className="btn btn-outline-secondary ms-auto">40% of Total</button>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="wd-assignment-list-item list-group-item p-0 mb-3 fs-5 border-gray bg-white">
            <div className="d-flex align-items-center p-3 ps-2 position-relative border-left-green">
              <BsGripVertical className="me-2" /><TfiWrite className="me-2 fs-3" />
              <div className="flex-grow-1">
                <Link className="wd-assignment-link text-gray" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  {assignment.title}
                </Link>
                <br />
                <small>
                  <span className="text-red">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableFrom || "2024-05-06"} | <br />
                  Due {assignment.dueDate || "2024-05-13"} at 11:59pm | {assignment.points || 100} pts
                </small>
              </div>
              <div className="d-flex align-items-center ms-auto">
                <AssignmentControlButtons onDelete={() => removeAssignment(assignment._id)} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
