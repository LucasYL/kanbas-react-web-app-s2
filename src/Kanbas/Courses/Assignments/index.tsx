import { FaSearch, FaPlus } from 'react-icons/fa';
import { BsGripVertical } from 'react-icons/bs';
import { TfiWrite } from 'react-icons/tfi';
import LessonControlButtons from './LessonControlButtons';
import './index.css';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text"><FaSearch /></span>
          <input id="wd-search-assignment" type="text" className="form-control" placeholder="Search for Assignments" />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-outline-secondary me-2"><FaPlus /> Group</button>
          <button id="wd-add-assignment" className="btn btn-danger"><FaPlus /> Assignment</button>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-3 p-3 ps-2 bg-light">
        <BsGripVertical />
        <h3 id="wd-assignments-title">
          ASSIGNMENTS
        </h3>
        <button className="btn btn-outline-secondary ms-auto">40% of Total</button>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-assignment-list-item list-group-item p-0 mb-3 fs-5 border-gray bg-white">
          <div className="d-flex align-items-center p-3 ps-2 position-relative border-left-green">
            <BsGripVertical className="me-2" /><TfiWrite className="me-2 fs-3" />
            <div className="flex-grow-1">
              <a className="wd-assignment-link text-gray" href="#/Kanbas/Courses/1234/Assignments/123">
                A1 - ENV + HTML
              </a>
              <br />
              <small>
                <span className="text-red">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <br />
                Due May 13 at 11:59pm | 100 pts
              </small>
            </div>
            <div className="ms-auto d-flex align-items-center lesson-control-buttons-container">
              <LessonControlButtons />
            </div>
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 mb-3 fs-5 border-gray bg-white">
          <div className="d-flex align-items-center p-3 ps-2 position-relative border-left-green">
            <BsGripVertical className="me-2" /><TfiWrite className="me-2 fs-3" />
            <div className="flex-grow-1">
              <a className="wd-assignment-link text-gray" href="#/Kanbas/Courses/1234/Assignments/124">
                A2 - CSS + BOOTSTRAP
              </a>
              <br />
              <small>
                <span className="text-red">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <br />
                Due May 20 at 11:59pm | 100 pts
              </small>
            </div>
            <div className="ms-auto d-flex align-items-center lesson-control-buttons-container">
              <LessonControlButtons />
            </div>
          </div>
        </li>
        <li className="wd-assignment-list-item list-group-item p-0 mb-3 fs-5 border-gray bg-white">
          <div className="d-flex align-items-center p-3 ps-2 position-relative border-left-green">
            <BsGripVertical className="me-2" /><TfiWrite className="me-2 fs-3" />
            <div className="flex-grow-1">
              <a className="wd-assignment-link text-gray" href="#/Kanbas/Courses/1234/Assignments/125">
                A3 - JAVASCRIPT + REACT
              </a>
              <br />
              <small>
                <span className="text-red">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <br />
                Due May 27 at 11:59pm | 100 pts
              </small>
            </div>
            <div className="ms-auto d-flex align-items-center lesson-control-buttons-container">
              <LessonControlButtons />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
