import React from "react";

const Students_results = () => {
  return (
    <div>
      <h1>Department of Computer Software Engineering, MCS</h1>
      <h1 id="resultheader">Results</h1>
      <div id="resultsection">
        <a href="results/details/?courseId=SDA">
          <div className="result">
            <div className="resultimage"> </div>
            <div className="resultname">
              <hr />{" "}
              <span>
                5th Sem (Fall 2021) <br />
                SE-210 Software Design and Architecture (BESE-25B)
              </span>
            </div>
          </div>
        </a>
        <a href="results/details/?courseId=WebEng">
          <div className="result">
            <div className="resultimage"> </div>
            <div className="resultname">
              <hr /> <span></span>5th Sem (Fall 2021) <br />
              CC-344 Web Engineering (BESE-25B)
            </div>
          </div>
        </a>
        <a href="results/details/?courseId=OS">
          <div className="result">
            <div className="resultimage"> </div>
            <div className="resultname">
              <hr /> <span></span>5th Sem (Fall 2021) <br />
              CS-330 Operating System (BESE-25B)
            </div>
          </div>
        </a>
        <a href="results/details/?courseId=PE">
          <div className="result">
            <div className="resultimage"> </div>
            <div className="resultname">
              <hr />{" "}
              <span>
                5th Sem (Fall 2021) <br />
                SE-210 Professional Ethics (BESE-25B)
              </span>
            </div>
          </div>
        </a>
        <a href="results/details/?courseId=TW">
          <div className="result">
            <div className="resultimage"> </div>
            <div className="resultname">
              <hr />{" "}
              <span>
                5th Sem (Fall 2021) <br />
                SE-210 Technical Writing (BESE-25B)
              </span>
            </div>
          </div>
        </a>
      </div>
      <script src="js/response.js"></script>
    </div>
  );
};

export default Students_results;
