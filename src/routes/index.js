import { useRoutes } from "react-router-dom";

import Login from "../admin/pages/Login";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Login />,
      children: [
        {
          path: "admin",
          //   element: <AdminLayout />,
          children: [
            {
              // path: "addFaculty",
              // element: <addFaculty />,
            },
            {
              path: "viewFaculties",
              //   element: <viewFaculties />,
            },
            {
              path: "updateFacult",
              //   element: <updateFaclulty />,
            },
          ],
        },
        {
          path: "faculty",
          //   element: <FacultyLayout />,
          children: [
            {
              path: "addStudent",
              //   element: <addStudent />,
            },
          ],
        },
      ],
    },
  ]);
}
