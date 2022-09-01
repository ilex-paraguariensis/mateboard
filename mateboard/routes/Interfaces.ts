interface DeepJSONValue{
	[key: string]: JSONValue;
}
type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;


interface Result {
  dataset: string;
  experiments: {
    name: string;
    metrics: Record<string, number>;
  }[];
}
interface Package{
	name: string;
	id: string;
	source: string;
	args: DeepJSONValue;
}
interface PackageReference{
	id: string;
	args: DeepJSONValue;
}
interface Experiment {
	id: string;
	status: "running" | "run" | "never-run";
  name: string;
	description: string;
	config:{
		dataset: PackageReference;
		trainers: PackageReference;
	}
}
interface MateSummary {
	models: Package[];
	trainers: Package[];
	datasets: Package[];
	experiments: Experiment[];
}
interface ExperimentResult {
	id: string;
	metrics: Record<string, number>;
}
export type { MateSummary, Experiment, Result };
