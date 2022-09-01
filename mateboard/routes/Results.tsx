/** @jsx h */
import { h } from "preact";
// import "./App.css";
import NavBar from "./NavBar.tsx";
import ResultDisplay from "./ResultDisplay.tsx";
import { Result } from "./Interfaces.ts";
import { asset } from "$fresh/runtime.ts";
const App = () => {
  const results: Result[] = [
    {
      dataset: "MNIST",
      experiments: [
        {
          name: "ResNet",
          metrics: {
            accuracy: 0.9,
          },
        },
        {
          name: "ViT",
          metrics: {
            accuracy: 0.95,
          },
        },
      ],
    },
    {
      dataset: "CIFAR10",
      experiments: [
        {
          name: "ResNet",
          metrics: {
            accuracy: 0.8,
          },
        },
        {
          name: "ViT",
          metrics: {
            accuracy: 0.95,
          },
        },
      ],
    },
  ];
  return (
    <div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />

      <link rel="stylesheet" href={asset("App.css")} />
      <div class="App">
        <NavBar
          title="MateBoard"
          sections={["Results", "Models", "Trainers", "Datasets"]}
          activeSection="Results"
        />
				<div style={{marginTop:"10vh"}}>{results.map(result => <ResultDisplay {...result} />)}</div>
      </div>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
        crossorigin="anonymous"
      >
      </script>
    </div>
  );
};

export default App;
