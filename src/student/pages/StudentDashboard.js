import React from "react";

import Navigation from "../../shared/components/Navigation/MainNavigation";

const StudentDashboard = () => {
  return (
    <Navigation
      headerLeft={[
        { value: "Add Student", link: "" },
        { value: "Updated Student", link: "" },
        { value: "Delete Student", link: "" },
      ]}
      name={"John"}
      profileImage={"profilePicture"}
    />
  );
};

export default StudentDashboard;
