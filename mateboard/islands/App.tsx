/** @jsx h */
import { h } from "preact";
// import "./App.css";
import NavBar from "../routes/NavBar.tsx";
import ExperimentsOverview from "../routes/ExperimentsOverview.tsx";
import {  MateSummary } from "../routes/Interfaces.ts";
import { asset } from "$fresh/runtime.ts";
import { useState, useEffect } from "preact/hooks";
console.log(ExperimentsOverview);
const App = () => {
	const [mateSummary, setMateSummary] = useState({experiments:[]} as unknown as MateSummary);
	console.log('hey')
	console.log(mateSummary);
	console.log(ExperimentsOverview);
	useEffect(() => {
		fetch(`mate_summary.json`)
		.then(res => res.json())
		.then(data => setMateSummary(data));
	} , [1]);
	const experiments = mateSummary.experiments;
	return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />

      <link rel="stylesheet" href={asset("App.css")} />
      <div class="App">
        <NavBar
          title="MateBoard"
          sections={["Results", "Models", "Trainers", "Datasets"]}
					activeSection=""
        />
        <ExperimentsOverview experiments={experiments} />
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      >
      </script>
    </div>
  );
};

export default App;
