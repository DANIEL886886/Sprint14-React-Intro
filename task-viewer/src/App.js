import "./App.css";
import TaskCard from "./components/task-card/TaskCard";
import {data} from "./components/app-data/data"

function App() {

  return (
	<div className="app-container">
		{data.map((props, index) => (
			<TaskCard
				key={index}
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
