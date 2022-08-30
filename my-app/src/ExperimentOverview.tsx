import Experiment from "./Experiment";
// imports the CSS file called ExperimentOverview.css
import "./ExperimentOverview.css";

function Status({statusValue}:{statusValue:("running"|"run"|"never-run")}){
	if (statusValue === "running"){
		return (
		<table style={{width:"60%", height: '3vh', textAlign:"center"}}>
			<tr style={{width:"100%"}}>
				<td>Training</td>
				<td style={{transform:"scale(0.2)"}}>
					<div className="loader"></div>
				</td>
			</tr>
		</table>)
	}
	else if (statusValue === "run"){
		return (

			<div className="inputGroup">
			<input id="option1" name="option1" type="checkbox"/>
			<label htmlFor="option1">Option One</label>
			</div>
		)
	}
	else if (statusValue === "never-run"){
		return (
			<div className="inputGroup">
			<input id="option1" name="option1" type="checkbox"/>
			<label htmlFor="option1">Option One</label>
			</div>
		)
	}
	else{
		return <div>hey</div>
	}
}
export default function ExperimentOverview({experiments}:{experiments: Experiment[]}) {
  return (
	  <div style={{textAlign:"center", marginTop:"10vh"}}>
		{experiments.map((item) => (
				<div className="card" style={{"width": "25rem", "display":"block", "marginLeft":"auto", "marginRight":"auto"}}>
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<Status statusValue={item.status} />
					</div>
				</div>
		))}
	  </div>
	);
}
