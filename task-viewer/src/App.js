import "./App.css";
import TaskCard from "./components/task-card/TaskCard";

function App() {
  const data = [
		{
			id: "T-0",
			name: "Design a new logo for Enum Workspace.",
			status: "Todo",
			dueDate: new Date(2022, 1, 21),
		},
		{
			id: "T-1",
			name: "Write a user manual for Enum Workspace.",
			status: "In Progress",
			dueDate: new Date(2022, 2, 22),
		},
		{
			id: "T-2",
			name: "Create a new marketing campaign for Enum Workspace.",
			status: "In Progress",
			dueDate: new Date(2022, 3, 23),
		},
		{
			id: "T-3",
			name: "Develop a new feature for Enum Workspace.",
			status: "In Progress",
			dueDate: new Date(2022, 4, 24),
		},
		{
			id: "T-4",
			name: "Conduct user research for Enum Workspace.",
			status: "In Progress",
			dueDate: new Date(2022, 5, 25),
		},
		{
			id: "T-5",
			name: "Create a new tutorial for Enum Workspace.",
			status: "In Progress",
			dueDate: new Date(2022, 6, 26),
		},
		{
			id: "T-6",
			name: "Optimize the performance of Enum Workspace.",
			status: "In Progress",
			dueDate: new Date(2022, 7, 27),
		},
		{
			id: "T-7",
			name: "Design a new dashboard for Enum Workspace.",
			status: "In Progress",
			dueDate: new Date(2022, 8, 28),
		},
		{
			id: "T-8",
			name: "Implement a new authentication system for Enum Workspace.",
			status: "In Progress",
			dueDate: new Date(2022, 9, 29),
		},
  ];

  return (
		<div className="app-container">
			<TaskCard
				id={data[0].id}
				status={data[0].status}
				name={data[0].name}
				dueDate={data[0].dueDate}
			/>
			<TaskCard
				id={data[1].id}
				status={data[1].status}
				name={data[1].name}
				dueDate={data[1].dueDate}
			/>
			<TaskCard
				id={data[2].id}
				status={data[2].status}
				name={data[2].name}
				dueDate={data[2].dueDate}
			/>
			<TaskCard
				id={data[3].id}
				status={data[3].status}
				name={data[3].name}
				dueDate={data[3].dueDate}
			/>
			<TaskCard
				id={data[4].id}
				status={data[4].status}
				name={data[4].name}
				dueDate={data[4].dueDate}
			/>
			<TaskCard
				id={data[5].id}
				status={data[5].status}
				name={data[5].name}
				dueDate={data[5].dueDate}
			/>
			<TaskCard
				id={data[6].id}
				status={data[6].status}
				name={data[6].name}
				dueDate={data[6].dueDate}
			/>
			<TaskCard
				id={data[7].id}
				status={data[7].status}
				name={data[7].name}
				dueDate={data[7].dueDate}
			/>
			<TaskCard
				id={data[8].id}
				status={data[8].status}
				name={data[8].name}
				dueDate={data[8].dueDate}
			/>
		</div>
  );
}

export default App;
