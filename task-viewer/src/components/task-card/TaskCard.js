import "./TaskCard.css";
import Badge from "../badge/Badge";
import DateContainer from "../date-container/DateContainer";

function TaskCard(props) {

  let btnclick = props.id

  const handleClick=() => {
    console.log("Click from " + props.id);
    btnclick = props.id + "Clicked !"
  }

  return (
    <div className="card-wrapper">

      <div className="card-header">
        <p className="task-id">{props.id}</p>
        <Badge status={props.status} />
      </div>

      <div className="card-content">
        <p>{props.name}</p>
      </div>

      <div className="card-footer">
        <button onClick={handleClick}>Click me!</button>
        <DateContainer date={props.dueDate} />
      </div>
      
    </div>
  );
}

export default TaskCard;
