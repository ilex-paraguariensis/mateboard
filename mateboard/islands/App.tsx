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
    { experiments: [] } as unknown as MateSummary,
  );
  const [view, setView] = useState("" as View);
  const experiments = mateSummary.experiments;
  const namedSections = {
    "default": <ExperimentsOverview experiments={experiments} />,
    "Results": <Results />,
    "Models": <Models />,
    "Trainers": <Trainers />,
    "Datasets": <Datasets />,
  } as Record<View, Element>;

  useEffect(() => {
    fetch(`mate_summary.json`)
      .then((res) => res.json())
      .then((data) => setMateSummary(data));
  }, [1]);
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
          sections={namedSections}
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
