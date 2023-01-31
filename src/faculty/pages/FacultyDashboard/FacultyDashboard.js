import React, { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Card from "../../../shared/components/UI/Card";
import News from "../../../static/images/news.jpg";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const getProfile = () => {
    axios
      .get(`${process.env.REACT_APP_ATLAS_URI}/profile`, {
        params: { userId: location.userId, type: "faculty" },
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
      <Profile />
      <div>
        <h1 className="text-3xl font-semibold mb-2">Courses</h1>
        <Card className="!p-0 !w-80">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-2 h-20 bg-[color:var(--primary-color)] p-4 text-white">
              <span>Software Engineering</span>
              <span>CS-330</span>
            </div>
            <span className="px-3 py-2">Credits: 3.0</span>
          </div>
        </Card>
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

export default Dashboard;
