import TaskCard from "../task-card/TaskCard";

function TaskList(props) {

       return (
              <div className="app-container">
                     {props.tasklist.map((props, index) => (
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

export default TaskList;