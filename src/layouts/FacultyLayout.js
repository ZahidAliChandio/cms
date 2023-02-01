import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../shared/components/Navigation/MainNavigation";

const FacultyLayout = () => {
  return (
    <Fragment>
      <Navigation
        headerLeft={[
          { value: "Dashboard", link: "/faculty/dashboard" },
          { value: "Profile", link: "/faculty/profile" },
          { value: "Courses", link: "/faculty/courses" },
        ]}
      />
      <div className="mt-12 p-8">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default FacultyLayout;
