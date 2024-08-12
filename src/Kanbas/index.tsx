import { Navigate, Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css";
import { useEffect, useState } from "react";
//import * as db from "./Database";
import * as client from "./Courses/client";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";

function generateRandomId() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export default function Kanbas() {
  const fetchCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    _id: generateRandomId(), name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  const addNewCourse = async () => {
    const newCourse = {
        ...course,
        _id: generateRandomId(),  // Generate a new random ID
    };
    const savedCourse = await client.createCourse(newCourse);
    setCourses([ ...courses, savedCourse ]);
};
  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };

   const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  return (
    <Provider store={store}>
    <div id="wd-kanbas">
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
            <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="Dashboard" element={
            <ProtectedRoute>
            <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>
          </ProtectedRoute>} />
            <Route path="Courses/:cid/*" element={<ProtectedRoute><Courses courses={courses} /></ProtectedRoute> } />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
    </div>
    </div>
    </Provider>
);}

