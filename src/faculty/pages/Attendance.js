import React from "react";

const Attendance = () => {
  return (
    <div className="faculty_attendance3" id="tablediv">
      <h3>Course Name</h3>
      <table>
        <caption>SUBJECTS</caption>
        <thead>
          <tr>
            <th className="name">Student Name</th>
            <th className="subject">Subject</th>
          </tr>
        </thead>
        <tbody>
          <tr id="attweb">
            <td className="subject">Web</td>
          </tr>
          <tr id="attsda">
            <td className="subject">Software Design And Architecture</td>
          </tr>
          <tr id="attos">
            <td className="subject">Operating System</td>
          </tr>
          <tr id="attpe">
            <td className="subject">Professional Ethics</td>
          </tr>
          <tr id="atttw">
            <td className="subject">Technical Writing</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
