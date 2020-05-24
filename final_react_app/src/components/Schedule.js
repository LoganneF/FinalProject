import React, { Component } from 'react';


class Schedule extends Component {
   state = {
      tasks: [
         {id: "1", src: "images/bed.png", taskName: "bed", type: "inProgress"},
         {id: "2", src: "images/school.png", taskName: "school", type: "inProgress"},
         {id: "3", src: "images/food.png", taskName: "food", type: "inProgress"},
         {id: "4", src: "images/outside.png", taskName: "outside", type: "inProgress"},

      ]
   }
	render() {
      var tasks = {
	      inProgress: [],
	      Done: []
	    }

		this.state.tasks.forEach ((task) => {
		  tasks[task.type].push(
		    <div key={task.taskName} 
		      className="draggable">
		      {task.taskName}
		    </div>
		  );
		});

    return (
       <div className="drag-container">
          <h1>Schedule</h1>
          <p>Schedule</p>
          <div className="inProgress">
	          <span className="group-header">In Progress</span>
	          {tasks.inProgress}
	        </div>
	        <div className="droppable">
	          <span className="group-header">Done</span>
	          {tasks.Done}
	        </div>	        
       </div>
    );
};
}
export default Schedule;