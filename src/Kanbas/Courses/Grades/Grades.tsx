import { FaFilter, FaUpload, FaDownload, FaCog } from 'react-icons/fa';
import './index.css';
import { useParams } from 'react-router';
import * as db from "../../Database";

export default function Grades() {
  const { cid } = useParams();

  // Filter enrollments to get enrollments for the current course
  const currentCourseEnrollments = db.enrollments.filter(enrollment => enrollment.course === cid);

  // Map over the enrollments to get the user objects
  const studentsInCourse = currentCourseEnrollments.map(enrollment => {
    return db.users.find(user => user._id === enrollment.user);
  });

  // Filter out undefined students
  const enrolledStudents = studentsInCourse.filter(student => student !== undefined);

  // Get assignments for the current course
  const courseAssignments = db.assignments.filter(assignment => assignment.course === cid);

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
              {courseAssignments.map(assignment => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map(student => student && (
              <tr key={student._id}>
                <td>{student.firstName} {student.lastName}</td>
                {courseAssignments.map(assignment => {
                  const grade = db.grades.find(grade => grade.student === student._id && grade.assignment === assignment._id);
                  return (
                    <td key={assignment._id}>{grade ? grade.grade : 'N/A'}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
