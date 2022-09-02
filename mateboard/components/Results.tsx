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
    <div style={{ marginTop: "10vh" }}>
          {results.map((result) => <ResultDisplay {...result} />)}
    </div>
  );
};

export default App;
