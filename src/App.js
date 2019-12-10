//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Score from "./components/Score"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const[team1, setTeam1] = useState('Lions')
  const[team2, setTeam2] = useState('Tigers')
  const [homeScore, setHomeScore] = useState(0)
  //const [homeGoal, setHomeGoal] = useState(0)
  const [awayScore, setAwayScore] = useState(0)
  //const [awayGoal, setAwayGoal] = useState(0)

  let homeScoreClickHandler = () => {
    console.log('homeScoreClick')
    setHomeScore(homeScore + 7)
  }

  let homeGoalClickHandler = () => {
    console.log('homeGoalClick')
    setHomeScore(homeScore + 3)
  }

  let awayScoreClickHandler = () => {
    console.log('homeScoreClick')
    setAwayScore(awayScore + 7)
  }

  let awayGoalClickHandler= () => {
    console.log('awayGoalClick')
    setAwayScore(awayScore + 3)
  }
  //const [renderCounter, setRenderCounter] =React.useState(0)

  // console.log(team1, renderCounter)

  // React.useEffect(() => {
  //   setTeam1 ('Lions')
  //   setRenderCounter(renderCounter +1)
  // }, [])
  return (
    <section className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{team1}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{team2}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <Score
          Score = {homeScoreClickHandler}
          Goal = {homeGoalClickHandler}
          //firstClassName = {"homeButtons"}
          //secondClassName = {"_touchdown"}
          //thirdClassName = {"_fieldGoal"}
          side={"home"}
        />

        <Score
          Score={awayScoreClickHandler}
          Goal={awayGoalClickHandler}
          //firstClassName={"_touchdown"}
          //secondClassName={"awayButtons"}
          side={"Away"}
          />

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/*<button 
            className="homeButtons__touchdown"
            onClick = {homeScoreClickHandler}
          >
            Home Touchdown
          </button>
          <button 
            className="homeButtons__fieldGoal"
            onClick = {homeGoalClickHandler}
          >
            Home Field Goal
          </button>
        <div className="awayButtons">
          <button 
            className="awayButtons__touchdown"
            onClick = {awayScoreClickHandler}
          >
            Away Touchdown
          </button>
          <button 
            className="awayButtons__fieldGoal"
            onClick ={awayGoalClickHandler}  
          >
            Away Field Goal
          </button>
        </div>
          */}
        </section>
    </section>
  );
}

export default App;
