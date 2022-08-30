import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import ExperimentOverview from "./ExperimentOverview"
import Experiment from "./Experiment";
function App() {
	const experiments : Experiment[] = [
		{
		name: "Experiment 1",
		"status": "running"
		},
		{
			"name": "Experiment 2",
			"status": "run"
		},
		{
			"name": "Experiment 2",
			"status": "never-run"
		},
		{
			"name": "Experiment 2",
			"status": "run"
		}
	]
  return (
		<div className="App">
      <NavBar title="MateBoard" sections={["Results", "Models", "Trainers", "Datasets"]}/>
	  <ExperimentOverview experiments={experiments}/>
    </div>
  );
}

export default App;
