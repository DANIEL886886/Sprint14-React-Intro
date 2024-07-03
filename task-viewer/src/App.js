import "./App.css";
import { data } from "./components/app-data/data";
import TaskList from "./components/task-list/task-list";

function App() {

	return (
		<TaskList tasklist={data} />
	);

}

export default App;
