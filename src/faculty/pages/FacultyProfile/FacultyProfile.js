import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import ButtonProfile from "../../components/UI/ButtonProfile";
import UserDetails from "./UserDetails";
import ProfilePicture from "../../../static/images/profile.jpg";
import Profile from "../../../shared/pages/Profile";
// import UserProfile from "./UserProfile";

const FacultyProfile = () => {
  const [facultyData, setFacultyData] = useState(null);

  const getProfile = () => {
    axios
      .get(`${process.env.REACT_APP_ATLAS_URI}/profile`, {
        params: { userId: localStorage.getItem("userId"), type: "student" },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setFacultyData(res.data.results);
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

  return facultyData && <Profile data={facultyData} />;
};

export default FacultyProfile;
