import { auto } from "async";
import React from "react";
import ReactDOM from "react-dom"
import "./navbar.css"
import todosData from "../ToDoData";

const containerProjectstyles  = {
    // display : "grid",
    // gridTemplateColumns: "1fr 1fr",
    height : auto,
    width : auto,
    backgroundColor : "#f3f4f5",
}

const toDO = {
    display : "flex",
    justifyContent : "flex-start",
    justifySelf: "flex-start",
    alignItems : "center",
    marginTop:"45px",
    marginLeft :"10px",
    // borderBottom : "2px solid",
    paddingBottom : "20px",
    // height: 70px;
    width: "100%",
    position: "relative",
    // borderBottom: "2px solid #0004ff",
    // background: "#cccaca",
    // borderShadow : "0 3px 10px rgba(0,0,0,0.5)",
}

// const borderBottoms = {
    // borderBottom : "2px solid #0004ff",
//     position: "absolute",
//     left: "50%",
//     right: "50%",
// }

const projectInfo = {
    justifyContent : "center",
    justifySelf: "center",
    marginLeft : "170px",
    // alignItems : "center",
    marginTop:"45px",
    alignSelf : "center",
    marginRight : "100px",
    // borderShadow : "0 3px 10px rgba(0,0,0,0.5)",
}
const toDoContainer = {
    border : "5px solid rgb(122, 146, 182)",
    justifyContent : "center",
    justifySelf: "center",
    borderRadius : "70px",
    padding :"25px",
    width : "300px",
    height : "550px",
    boxShadow : "0 8px 8px #323247, 0 8px 16px #323247",
    marginLeft : "-100px",
    marginBottom : "20px"
}

const firstProject = {
    display : "grid",
    gridTemplateColumns : "2.5fr 1fr 3fr",
    marginTop: " 100px"
}


function TodoItems(props) {
    return (
        <div style={toDO} className="todo-item">
            <input class="checkbox" type="checkbox" />
            <p style={{marginLeft : "40px"}}>{props.content.text}</p>
            <div id="border"></div>
        </div>
    )
}

const TodoItem = todosData.map(item => (<TodoItems key="item.id" content={item}/>))

function TodoApp() {
  return(
  <div style={containerProjectstyles} className="containerProject">
      <div style={firstProject}>
        <div style={projectInfo} className="project-info">
            <h2 className="project-title">ToDo App</h2>
            <p>Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Facere eligendi maxime,
                optio veritatis cupiditate, voluptatum 
                voluptates earum officiis dolor placeat 
                quasi obcaecati animi aliquid odio. 
                Reiciendis voluptatum provident explicabo
                repellendus.</p>
        </div>

        <div className = "vertical"></div>

        <div style={toDoContainer} className="project-main">
            {TodoItem}
        </div>
    </div>
        

    </div>)
}

export default TodoApp