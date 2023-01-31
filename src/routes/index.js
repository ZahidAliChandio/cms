import { useRoutes } from "react-router-dom";

import AdminLogin from "../admin/pages/AdminLogin";
import StudentLogin from "../student/pages/StudentLogin/StudentLogin";
import FacultyLogin from "../faculty/pages/FacultyLogin/FacultyLogin";

import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../admin/pages/AdminDashboard";
import FacultyLayout from "../layouts/FacultyLayout";
import AttendanceDetails from "../faculty/pages/FacultyAttendance/AttendanceDetails ";
import ResultDetails from "../faculty/pages/FacultyResults/ResultDetails";
import Results from "../faculty/pages/FacultyResults/Results";
import Attendance from "../faculty/pages/FacultyAttendance/Attendance";
import FacultyDashboard from "../faculty/pages/FacultyDashboard/FacultyDashboard";
import FacultyProfile from "../faculty/pages/FacultyProfile/FacultyProfile";
import FacultyCourses from "../faculty/pages/FacultyCourses/FacultyCourses";
import StudentLayout from "../layouts/StudentLayout";
import StudentDashboard from "../student/pages/StudentDashboard/StudentDashboard";
import StudentResults from "../student/pages/StudentResults/StudentResults";
import StudentProfile from "../student/pages/StudentProfile/StudentProfile";
import StudentCourses from "../student/pages/StudentCourses/StudentCourses";
import StudentAttendance from "../student/pages/StudentAttendance/StudentAttendance";

export default function Router() {
  return useRoutes([
    {
      path: "student",
      children: [
        {
          path: "login",
          element: <StudentLogin />,
        },
      ],
    },
    {
      path: "student",
      element: <StudentLayout />,
      children: [
        {
          path: "dashboard",
          element: <StudentDashboard />,
        },
        {
          path: "attendance",
          element: <StudentAttendance />,
        },
        {
          path: "results",
          element: <StudentResults />,
        },
        {
          path: "profile",
          element: <StudentProfile />,
        },
        {
          path: "courses",
          element: <StudentCourses />,
        },
      ],
    },
    {
      path: "faculty",
      children: [
        {
          path: "login",
          element: <FacultyLogin />,
        },
      ],
    },
    {
      path: "faculty",
      element: <FacultyLayout />,
      children: [
        {
          path: "dashboard",
          element: <FacultyDashboard />,
        },
        {
          path: "attendance",
          element: <Attendance />,
        },
        {
          path: "attendance/details",
          element: <AttendanceDetails />,
        },
        {
          path: "profile",
          element: <FacultyProfile />,
        },
        {
          path: "results",
          element: <Results />,
        },
        {
          path: "results",
          children: [
            {
              path: "details",
              element: <ResultDetails />,
            },
          ],
        },
        {
          path: "courses",
          element: <FacultyCourses />,
        },
      ],
    },
    {
      path: "admin",
      children: [
        {
          path: "login",
          element: <AdminLogin />,
        },
      ],
    },
    {
      path: "admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "addFaculty",
          // element: <addFaculty />,
        },
        {
          path: "viewFaculties",
          //   element: <viewFaculties />,
        },
        {
          path: "updateFaculty",
          //   element: <updateFaclulty />,
        },
        {
          path: "addStudent",
          // element: <addFaculty />,
        },
        {
          path: "viewStudent",
          //   element: <viewFaculties />,
        },
        {
          path: "updateStudent",
          //   element: <updateFaclulty />,
        },
      ],
    },
  ]);
}
