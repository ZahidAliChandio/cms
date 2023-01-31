import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

import Card from "../../../shared/components/UI/Card";

const StudentResults = () => {
  const [courses, setCourses] = useState(null);
  const navigate = useNavigate();

  const getCourses = () => {
    axios
      .get(`${process.env.REACT_APP_ATLAS_URI}/student/courses`, {
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

  const onCourseClick = (course) => {
    navigate("/student/results/details", {
      state: { courseName: course.courseName, studentId: course.studentID },
    });
  };

  return (
    courses && (
      <div>
        <h1 className="text-3xl font-semibold my-4">Courses Results</h1>
        {courses.map((course, index) => (
          <Card
            className="!p-0 !w-80 !hover:shadow-[0_35px_60px_15px_rgba( 0, 0, 0, 0.3)] cursor-pointer"
            key={index}
            onClick={() => {
              onCourseClick(course);
            }}
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
              </div>
            </div>
          </Card>
        ))}
      </div>
    )
  );
};

export default StudentResults;
