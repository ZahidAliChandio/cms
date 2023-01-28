import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../shared/components/Navigation/MainNavigation";

const AdminLayout = () => {
  return (
    <Fragment>
      <Navigation
        headerLeft={[
          { value: "Add Student", link: "" },
          { value: "Updated Student", link: "" },
          { value: "Delete Student", link: "" },
        ]}
        faculty={[
          { value: "Add Faculty", link: "" },
          { value: "Updated Faculty", link: "" },
          { value: "Delete Faculty", link: "" },
        ]}
      />
      <Outlet />
    </Fragment>
  );
};

export default AdminLayout;
