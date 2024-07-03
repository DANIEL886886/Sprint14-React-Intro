import "./App.css";
import React from "react";
import { data } from "./components/app-data/data";
import TaskList from "./components/task-list/task-list";

function App() {


	return React.createElement(TaskList,{tasklist:data})

	// return (
	// 	<TaskList tasklist={data} />
	// );

}

export default App;
