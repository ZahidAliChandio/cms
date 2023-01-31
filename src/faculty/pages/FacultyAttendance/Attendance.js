import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../shared/components/UI/Card";

const FacultyAttendance = () => {
  const studentsList = [
    {
      id: 33434,
      name: "Junaid",
      course: "BESE-26",
    },
    {
      id: 83344,
      name: "Saleem",
      course: "BESE-26",
    },
    {
      id: 44342,
      name: "Naeem",
      course: "BESE-26",
    },
  ];

  return (
    <div id="tablediv">
      <h2 className="text-2xl my-4 font-semibold">BESE-26</h2>
      <form onSubmit={undefined}>
        <table className="w-full text-center border-separate border-spacing-4">
          <thead>
            <tr>
              <th>S.No</th>
              <th>CMS ID</th>
              <th>Name</th>
              <th>Course</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {studentsList.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <input
                    type={"text"}
                    defaultValue="A"
                    className="w-8 text-center outline-none border border-gray-400"
                    required
                  />
                </td>
                <td>
                  <button
                    className="p-2 bg-blue-600 text-white w-20"
                    value="Edit"
                    type="submit"
                    onClick={undefined}
                  >
                    Mark
                  </button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default FacultyAttendance;
