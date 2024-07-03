import "./App.css";
import React from "react";
import { data } from "./components/AppData/Data";
import TaskList from "./components/TaskList/TaskList";

function App() {


	return React.createElement(TaskList,{tasklist:data})

	// return (
	// 	<TaskList tasklist={data} />
	// );

}

export default App;
