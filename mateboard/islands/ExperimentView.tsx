/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import NavBar from "../routes/NavBar.tsx";
import { asset } from "$fresh/runtime.ts";
import Config from "../components/Config.tsx";
import Training from "../components/Training.tsx";
import Visualizations from "../components/Visualizations.tsx";


export default function ({experimentName}: {experimentName: string}) {
	const [experimentConfig, setExperimentConfig] = useState({});
	useEffect(() => {
		fetch(`experiments_config/${experimentName}.json`)
		.then(res => res.json())
		.then(data => setExperimentConfig(data));
	} , []);
	const results = []
	const views = {

	}
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
          sections={["Training", "Visualizations", "Config", "TensorBoard"]}
          activeSection="Results"
					root={`${experimentName}/`}
        />
				<div style={{marginTop:"10vh"}}>{results.map(result => <ResultDisplay {...result} />)}</div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossOrigin="anonymous"
      >
      </script>
    </div>
  );
}
