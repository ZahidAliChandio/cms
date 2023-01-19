import React from "react";

const Dashboard = () => {
  return (
    <div id="wrapper">
      <div id="middlesection">
        <h1>Department of Computer Software Engineering, MCS</h1>
        <h2>Hi Sara</h2>
        <h4>Let&rsquo;s see what you&rsquo;ve got!</h4>
        <h1>Courses overview</h1>
        <div id="coursessection">
          <div className="course">
            <div className="courseimage"></div>
            <div className="coursename">
              <hr />{" "}
              <span>
                5th Sem (Fall 2021) <br /> SE-210 Software Design and
                Architecture (BESE-25B)
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
                5th Sem (Fall 2021) <br /> SE-210 Software Design and
                Architecture (BESE-25B)
              </span>
            </div>
          </div>
          <div className="course">
            <div className="courseimage"></div>
            <div className="coursename">
              <hr />{" "}
              <span>
                5th Sem (Fall 2021) <br /> SE-210 Software Design and
                Architecture (BESE-25B)
              </span>
            </div>
          </div>
          <div className="course">
            <div className="courseimage"></div>
            <div className="coursename">
              <hr />{" "}
              <span>
                5th Sem (Fall 2021) <br /> SE-210 Software Design and
                Architecture (BESE-25B)
              </span>
            </div>
          </div>
        </div>
        <h1>Alerts and Notifications</h1>
        <div id="alertssection">
          <div className="alert"></div>
          <div className="alert"></div>
          <div className="alert"></div>
          <div className="alert"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
