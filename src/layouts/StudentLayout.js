import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../shared/components/Navigation/MainNavigation";

const StudentLayout = () => {
  return (
    <Fragment>
      <Navigation
        headerLeft={[
          { value: "Dashboard", link: "" },
          { value: "Profile", link: "" },
          { value: "Result", link: "" },
          { value: "Attendence", link: "" },
          { value: "Course", link: "" },
        ]}
      />
      <Outlet />
    </Fragment>
  );
};
export default StudentLayout;
