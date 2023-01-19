import React from "react";

const Attendance_details = () => {
  return (
    <div>
      <h1>Department of Computer Software Engineering, MCS</h1>
      <div id="tablediv">
        <h3>Course Name</h3>
        <table>
          <caption>Attendance Table</caption>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="s no">1</td>
              <td className="date">
                <input type="date" value="2018-07-22" disabled="" />
              </td>
              <td className="status">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className="s no">2</td>
              <td className="date">
                <input type="date" value="2018-07-29" disabled="" />
              </td>
              <td className="status">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className="s no">3</td>
              <td className="date">
                <input type="date" value="2018-08-05" disabled="" />
              </td>
              <td className="status">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className="s no">4</td>
              <td className="date">
                <input type="date" value="2018-08-12" disabled="" />
              </td>
              <td className="status">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className="s no">4</td>
              <td className="date">
                <input type="date" value="2018-08-19" disabled="" />
              </td>
              <td className="status">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className="s no">4</td>
              <td className="date">
                <input type="date" value="2018-08-26" disabled="" />
              </td>
              <td className="status">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className="s no">4</td>
              <td className="date">
                <input type="date" value="2018-09-4" disabled="" />
              </td>
              <td className="status">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className="s no">4</td>
              <td className="date">
                <input type="date" value="2018-09-11" disabled="" />
              </td>
              <td className="status">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className="s no">4</td>
              <td className="date">
                <input type="date" value="2018-09-19" disabled="" />
              </td>
              <td className="status">
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <script src="js/response.js"></script> */}
    </div>
  );
};

export default Attendance_details;
