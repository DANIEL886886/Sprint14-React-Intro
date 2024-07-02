import "./App.css";
import TaskCard from "./components/task-card/TaskCard";
import { data } from "./components/app-data/data.js";

function App() {

  return (
	<div className="app-container">
		{data.map((props) => (
			<TaskCard
				id={props.id}
				status={props.status}
				name={props.name}
				dueDate={props.dueDate}
			/>
		))}
	</div>
  );
}

export default App;
