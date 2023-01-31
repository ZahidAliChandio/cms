import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const StudentResultDetails = () => {
  const location = useLocation();
  const [results, setResults] = useState();

  const getResults = () => {
    axios
      .get(`${process.env.REACT_APP_ATLAS_URI}/student/results`, {
        params: {
          userId: location.state.studentId,
          courseName: location.state.courseName,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setResults(res.data.results);
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
    getResults();
  }, []);

  return (
    results && (
      <div>
        <h2 className="text-2xl font-semibold mb-4">Student Result</h2>
        <div className="flex flex-col gap-1 text-lg font-medium font-serif">
          <span>Course: BESE-26</span>

          <span>CMS Id: {location.state.studentId}</span>
        </div>
        <table className="w-full text-center box-shadow mt-8">
          <thead>
            <tr className="bg-[color:var(--primary-color)] h-11 text-white">
              <th className="font-medium">Assesment Type</th>
              <th className="font-medium">Total Marks</th>
              <th className="font-medium">Marks Obtaind</th>
              <th className="font-medium">Percentage</th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="font-semibold h-12 border-b">
              <td>Assignment 1</td>
              <td>10</td>
              <td>{results.assignment1}</td>
              <td className="tracking-wider">
                {Math.floor((results.assignment1 / 10) * 100) + "%"}
              </td>
            </tr>
            <tr className="font-semibold h-12 border-b">
              <td>Assignment 2</td>
              <td>10</td>
              <td>{results.assignment2}</td>
              <td className="tracking-wider">
                {Math.floor((results.assignment2 / 10) * 100) + "%"}
              </td>
            </tr>
            <tr className="font-semibold h-12 border-b">
              <td>Assignment 3</td>
              <td>10</td>
              <td>{results.assignment3}</td>
              <td className="tracking-wider">
                {Math.floor((results.assignment3 / 10) * 100) + "%"}
              </td>
            </tr>
            <tr className="font-semibold h-12 border-b">
              <td>Quiz 1</td>
              <td>10</td>
              <td>{results.quiz1}</td>
              <td className="tracking-wider">
                {Math.floor((results.quiz1 / 10) * 100) + "%"}
              </td>
            </tr>
            <tr className="font-semibold h-12 border-b">
              <td>Quiz 2</td>
              <td>10</td>
              <td>{results.quiz2}</td>
              <td className="tracking-wider">
                {Math.floor(Math.floor((results.quiz2 / 10) * 100)) + "%"}
              </td>
            </tr>
            <tr className="font-semibold h-12 border-b">
              <td>Quiz 3</td>
              <td>10</td>
              <td>{results.quiz3}</td>
              <td className="tracking-wider">
                {Math.floor((results.quiz3 / 10) * 100) + "%"}
              </td>
            </tr>
            <tr className="font-semibold h-12 border-b">
              <td>Mid</td>
              <td>30</td>
              <td>{results.oht1 + results.oht2}</td>
              <td className="tracking-wider">
                {Math.floor(((results.oht1 + results.oht2) / 30) * 100) + "%"}
              </td>
            </tr>
            <tr className="font-semibold h-12 border-b">
              <td>Final</td>
              <td>50</td>
              <td>{results.final}</td>
              <td className="tracking-wider">
                {Math.floor((results.final / 50) * 100) + "%"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  );
};
export default StudentResultDetails;
