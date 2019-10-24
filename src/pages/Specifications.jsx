
import React from "react";
import ReactDOM from "react-dom";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { specifications, testData } from "../testData"

function Specifications() {

  return (
    <div className="wrapper">
      <h1>Specifications</h1>
      <div className="specifications">
        <div>
           <CircularProgressbar
       className="progressBar"
          value={specifications.exercise}
          text={`${specifications.exercise}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: testData.categories[0].color,
            trailColor: "grey"
          })}
        />
        {testData.categories[0].description}
        </div>
        <div>
        <CircularProgressbar
       className="progressBar"
          value={specifications.diet}
          text={`${specifications.diet}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: testData.categories[1].color,
            trailColor: "grey"
          })}
        />
         {testData.categories[1].description}
        </div>
        <div>
        <CircularProgressbar
       className="progressBar"
          value={specifications.hygiene}
          text={`${specifications.hygiene}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: testData.categories[2].color,
            trailColor: "grey"
          })}
        />
         {testData.categories[2].description}
        </div>
        <div>
        <CircularProgressbar
       className="progressBar"
          value={specifications.social}
          text={`${specifications.social}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: testData.categories[3].color,
            trailColor: "grey"
          })}
        />
         {testData.categories[3].description}
        </div>
        <div>
       <CircularProgressbar
       className="progressBar"
          value={specifications.drugs}
          text={`${specifications.drugs}%`}
          styles={buildStyles({
            textColor: "black",
            pathColor: testData.categories[4].color,
            trailColor: "grey"
          })}
        />
         {testData.categories[4].description}
        </div>
  </div>
  </div>
  )
}

export default Specifications
