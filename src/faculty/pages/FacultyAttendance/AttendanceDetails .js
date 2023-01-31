import React from "react";

const AttendanceDetails = () => {
  const studentsList = [
    {
      id: 33434,
      name: "shan",
      course: "BESE-26",
    },
    {
      id: 83344,
      name: "shan",
      course: "BESE-26",
    },
    {
      id: 44342,
      name: "shan",
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
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
        <div className="flex gap-4 mt-12 font-semibold float-right mr-20">
          <button
            className="p-2 bg-blue-600 text-white w-20"
            value="Edit"
            type="submit"
            onclick="update()"
          >
            Mark
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendanceDetails;
