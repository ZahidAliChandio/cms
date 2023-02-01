import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Card from "../../../shared/components/UI/Card";
import News from "../../../static/images/news.jpg";
import Profile from "./Profile";

import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");

const Dashboard = () => {
  const [courses, setCourses] = useState(null);
  const [profileData, setProfileData] = useState(null);

  const [news, setNews] = useState([]);

  useEffect(() => {
    //listens for the event list from the backend
    socket.on("sendNews", (schedules) => {
      setNews(schedules);
    });
  }, []);

  const getProfile = () => {
    axios
      .get(`${process.env.REACT_APP_ATLAS_URI}/profile`, {
        params: { userId: localStorage.getItem("userId"), type: "faculty" },
      })
      .then((res) => {
        if (res.status === 200) {
          setProfileData(res.data.results);
          console.log(res.data.results);
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
  const getCourses = () => {
    axios
      .get(`${process.env.REACT_APP_ATLAS_URI}/faculty/courses`, {
        params: { userId: localStorage.getItem("userId") },
      })
      .then((res) => {
        if (res.status === 200) {
          setCourses(res.data.results);
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
    getCourses();
  }, []);

  useEffect(() => {
    getProfile();
  }, []);
  return (
    profileData && (
      <div className="flex flex-col gap-2">
        <Profile data={profileData} />
        {courses && (
          <div>
            <h1 className="text-3xl font-semibold my-4">Courses</h1>
            {courses.map((course, index) => (
              <Card
                className="!p-0 !w-80 !hover:shadow-[0_35px_60px_15px_rgba( 0, 0, 0, 0.3)] cursor-pointer"
                key={index}
              >
                <div className="flex flex-col w-full">
                  <div className="flex flex-col gap-2 h-20 bg-[color:var(--primary-color)] p-4 text-white">
                    <span>{course.courseName}</span>
                    <span>{course.courseCode}</span>
                  </div>
                  <div className="flex flex-col gap-2 py-2 bg-gray-100">
                    <span className="px-3 font-semibold">
                      Credits: {course.courseCreditHour}
                    </span>
                    <span className="px-3  font-semibold">
                      Course Type: {course.courseType}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
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
    )
  );
};

export default Dashboard;
