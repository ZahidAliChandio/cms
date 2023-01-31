import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Chart from "react-apexcharts";

import Card from "../../../shared/components/UI/Card";
import News from "../../../static/images/news.jpg";
import StudentDashboardProfile from "./StudentDashboardProfile";

const StudentDashboard = () => {
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
  const [state, setState] = useState({
    options: {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 540,
        type: "pie",
      },
      labels: [
        "Operating System",
        "Web Engineering",
        "Professional Ethics",
        "Software Design and Architecture",
        "Technical Writing",
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 330,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    // console.log(location);
    // console.log(location.user);
    getProfile();
  }, []);

  return (
    studentData && (
      <div className="flex flex-col gap-2">
        <StudentDashboardProfile data={studentData} />
        <h1 className="text-3xl font-semibold mb-2">Attendance</h1>
        <div className="flex justify-center my-4">
          <Chart
            options={state.options}
            series={state.options.series}
            type={state.options.chart.type}
            width={state.options.chart.width}
          />
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
    )
  );
};

export default StudentDashboard;
