import React from "react";

const Attendance= () => {
  return (
    <div>
      <h1>Department of Computer Software Engineering, MCS</h1>
      <h2>Attendance Chart</h2>
      <div id="chartdiv">
        <div>
          <canvas id="myChart"></canvas>
        </div>
      </div>
      <h2>Course-wise Attendance</h2>
      <div className="coursewiseattendance" id="coursessection">
        <div className="course">
          <div className="courseimage"></div>
          <div className="coursename">
            <hr />{" "}
            <span>
              5th Sem (Fall 2021) <br /> SE-210 Software Design and Architecture
              (BESE-25B)
            </span>
          </div>
        </div>
        <div className="course">
          <div className="courseimage"></div>
          <div className="coursename">
            <hr /> 5th Sem (Fall 2021) <br />
            CC-344 Web Engineering (BESE-25B)
          </div>
        </div>
        <div className="course">
          <div className="courseimage"></div>
          <div className="coursename">
            <hr /> 5th Sem (Fall 2021) <br />
            CS-330 Operating System (BESE-25B)
          </div>
        </div>
        <div className="course">
          <div className="courseimage"></div>
          <div className="coursename">
            <hr />{" "}
            <span>
              5th Sem (Fall 2021) <br /> SE-210 Software Design and Architecture
              (BESE-25B)
            </span>
          </div>
        </div>
        <div className="course">
          <div className="courseimage"></div>
          <div className="coursename">
            <hr />{" "}
            <span>
              5th Sem (Fall 2021) <br /> SE-210 Software Design and Architecture
              (BESE-25B)
            </span>
          </div>
        </div>
        <div className="course">
          <div className="courseimage"></div>
          <div className="coursename">
            <hr />{" "}
            <span>
              5th Sem (Fall 2021) <br /> SE-210 Software Design and Architecture
              (BESE-25B)
            </span>
          </div>
        </div>
      </div>
      <script src="js/attendance.js"></script>
      <script src="js/response.js"></script>
    </div>
  );
};

export default Attendance;
