import { useRoutes } from "react-router-dom";

import AdminLogin from "../admin/pages/AdminLogin";
import StudentLogin from "../student/pages/StudentLogin/StudentLogin";
import FacultyLogin from "../faculty/pages/FacultyLogin/FacultyLogin";

import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../admin/pages/AdminDashboard";
import StudentLayout from "../layouts/StudentLayout";
import StudentDashboard from "../student/pages/StudentDashboard/StudentDashboard";
import FacultyLayout from "../layouts/FacultyLayout";
import FacultyDashboard from "../faculty/pages/FacultyDashboard/FacultyDashboard";
import FacultyCourses from "../faculty/pages/FacultyCourses/FacultyCourses";
import Attendance from "../faculty/pages/FacultyAttendance/Attendance";
import AttendanceDetails from "../faculty/pages/FacultyAttendance/AttendanceDetails ";
import Results from "../faculty/pages/FacultyResults/Results";
import ResultDetails from "../faculty/pages/FacultyResults/ResultDetails";
import FacultyProfile from "../faculty/pages/FacultyProfile/FacultyProfile";
import StudentResults from "../student/pages/StudentResults/StudentResults";
import StudentProfile from "../student/pages/StudentProfile/StudentProfile";
import StudentCourses from "../student/pages/StudentCourses/StudentCourses";

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
          path: "attendence",
          //   element: <viewFaculties />,
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
