/** @jsx h */
import { h } from "preact";
import { asset } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";

import NavBar from "../components/NavBar.tsx";
import Results from "../components/Results.tsx";
import Models from "../components/Models.tsx";
import Trainers from "../components/Trainers.tsx";
import Datasets from "../components/Datasets.tsx";
import ExperimentsOverview from "../components/ExperimentsOverview.tsx";
import { MateSummary } from "../components/Interfaces.ts";

type View = "default" | "Results" | "Models" | "Trainers" | "Datasets";

const App = () => {
  const [mateSummary, setMateSummary] = useState(
    { models: [], experiments: [] } as unknown as MateSummary,
  );
  const [view, setView] = useState("" as View);
  const defaultSections = {
    "Results": <Results />,
    "Models": <Models models={mateSummary.models} />,
    "Trainers": <Trainers />,
    "Datasets": <Datasets />,
  } as Record<View, h.JSX.Element>;
  const [sections, setSections] = useState(defaultSections);
  const [section, setSection] = useState("default");
  useEffect(() => {
    fetch(`mate_summary.json`)
      .then((res) => res.json())
      .then((data) =>
        setMateSummary(() => {
          defaultSections["Models"] = <Models models={data.models} />;
          return data;
        })
      );
  }, [1]);
  console.log(mateSummary.models);
  const experiments = mateSummary.experiments;

  return (
    <div>
			<title>Maté</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossOrigin="anonymous"
      />
      <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script src="https://cdn.plot.ly/plotly-2.14.0.min.js"></script>
      <link rel="stylesheet" href={asset("App.css")} />
      <style>
        {`html, body {
				 		background-color: #37474F;

				}	
				`}
      </style>
      <div class="App">
        <NavBar
          title="MateBoard"
          sections={sections}
          defaultSections={defaultSections}
          defaultSection={
            <ExperimentsOverview
              experiments={experiments}
              setSections={setSections}
              setSection={setSection}
            />
          }
          setSections={setSections}
          section={section}
          setSection={setSection}
        />
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
