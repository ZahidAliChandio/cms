import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Card from "../../../shared/components/UI/Card";

const StudentCourses = () => {
  const [courses, setCourses] = useState(null);

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
  // hadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
  return (
    courses && (
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
    )
  );
};

export default StudentCourses;
