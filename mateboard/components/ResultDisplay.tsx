/** @jsx h */
import { h } from "preact";
import { asset } from "$fresh/runtime.ts";
import { Result } from "./Interfaces.ts";
export default (
  { result }: {
    result: Result;
  },
) => {
  console.log(result);
  const metrics = Object.keys(result.experiments[0].metrics);

  return (
    <div style={{ textAlign: "center", widht: "100%" }}>
      <div
        class="card"
        style={{
          backgroundColor: "#D0FFC6",
          marginBottom: "5px",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1100px",
        }}
      >
        <style>
          {`th, td {
						max-width: 10px;
					}`}
        </style>
        <h1>{result.dataset}</h1>
        <table
          class="table table-bordered table-hover"
          style={{
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Experiment Name</th>
              {metrics.map((metric) => <th scope="col">{metric}</th>)}
            </tr>
          </thead>
          <tbody>
            {result.experiments.map((experiment, i) => (
              <tr>
                <td style={{ maxWidth: "10px" }} scope="row">{i + 1}</td>
                <td>{experiment.name}</td>
                {metrics.map((metric) => <td>{experiment.metrics[metric]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
