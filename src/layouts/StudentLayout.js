import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../shared/components/Navigation/MainNavigation";

const StudentLayout = () => {
  return (
    <Fragment>
      <Navigation
        headerLeft={[
          { value: "Dashboard", link: "/student/dashboard" },
          { value: "Profile", link: "/student/profile" },
          { value: "Result", link: "/student/results" },
          { value: "Attendence", link: "/student/attendance" },
          { value: "Courses", link: "/student/courses" },
        ]}
      />
      <div className="mt-12 p-8">
        <Outlet />
      </div>
    </Fragment>
  );
};
export default StudentLayout;
