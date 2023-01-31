import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Profile from "../../../shared/pages/Profile";

const StudentProfile = () => {
  const [studentData, setStudentData] = useState(null);
  const getProfile = () => {
    axios
      .get(`${process.env.REACT_APP_ATLAS_URI}/profile`, {
        params: { userId: localStorage.getItem("userId"), type: "student" },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          // console.log(res.data.results);
          setStudentData(res.data.results);
        } else {
          console.log(res);
          toast.error(res?.data?.error?.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  useEffect(() => {
    getProfile();
  }, []);

  return studentData && <Profile data={studentData} />;
};
export default StudentProfile;
