import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Card from "../../../shared/components/UI/Card";
import News from "../../../static/images/news.jpg";
import StudentDashboardProfile from "./StudentDashboardProfile";
import { useLocation } from "react-router-dom";

const StudentDashboard = () => {
  const location = useLocation();
  const getProfile = () => {
    axios
      .get(`${process.env.REACT_APP_ATLAS_URI}/profile`, {
        params: { userId: location.userId, type: "student" },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
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

  return (
    <div className="flex flex-col gap-2">
      <StudentDashboardProfile />
      <div>
        <h1 className="text-3xl font-semibold mb-2">Attendance</h1>
        <span>Attendance Here</span>
      </div>
      <div>
        <h1 className="text-3xl font-semibold my-2">
          Alerts and Notifications
        </h1>
        <Card className={"!rounded-sm !flex-col !p-0"}>
          <div className="h-52 w-72 overflow-hidden">
            <img src={News} alt="News" />
          </div>
          <span className="text-lg text-semibold -mt-3 mb-3">
            This is an un-official news
          </span>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
