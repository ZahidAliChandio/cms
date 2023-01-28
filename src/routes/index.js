import { useRoutes } from "react-router-dom";

import AdminLogin from "../admin/pages/AdminLogin";
import StudentLogin from "../student/pages/StudentLogin";
import FacultyLogin from "../faculty/pages/FacultyLogin";
import AdminDashboard from "../admin/pages/AdminDashboard";
import AdminLayout from "../layouts/AdminLayout";
import StudentLayout from "../layouts/StudentLayout";
import FacultyLayout from "../layouts/FacultyLayout";

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
          // path: "addFaculty",
          // element: <addFaculty />,
        },
        {
          path: "attendence",
          //   element: <viewFaculties />,
        },
        {
          path: "results",
          //   element: <updateFaclulty />,
        },
        {
          path: "profile",
          //   element: <updateFaclulty />,
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
          //   element: <addStudent />,
        },
        {
          path: "home",
          //   element: <addStudent />,
        },
        {
          path: "profile",
          //   element: <addStudent />,
        },
        {
          path: "results",
          //   element: <addStudent />,
        },
        {
          path: "courses",
          //   element: <addStudent />,
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
