import React, { useState } from 'react';

const More = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [tasks, setTasks] = useState([]); 

  
  function getData(e) {
    setTask(e.target.value);
  }


  function handlePriority(p) {
    setPriority(p); 
  }


  function handleSubmit() {
    if (task && priority) { 
      setTasks([...tasks, { task, priority }]);
      setTask("");
      setPriority(""); 
    }
  }

  
  function handleCancel() {
    setTask("");
    setPriority("");
  }

 
  function handleDelete(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks); 
  }

  return (
    <div className='container'>
      <button 
        type="button" 
        className="btn btn-danger mt-5" 
        data-bs-toggle="modal" 
        data-bs-target="#myModal"
      >
        Add Task
      </button>
      <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <h4 className="modal-title">Add Task</h4>
            <label htmlFor="task" className='from-label h3 ms-5'>Tap Task</label>
            <input
              type="text"
              onChange={getData}
              id="task"
              value={task}
              className='form-control ms-5 w-75 mt-2'
            />
            <h3 className='ms-4'>Priority</h3>
            <div className='justify-content-between'>
              <button 
                className='btn btn-sm border-danger btn-outline-danger float-left w-25 ms-4' 
                onClick={() => handlePriority('High')}
              >
                High
              </button>
              <button 
                className='btn btn-sm border-warning btn-outline-warning m-2 ms-5' 
                onClick={() => handlePriority('Medium')}
              >
                Medium
              </button>
              <button 
                className='btn btn-sm border-info btn-outline-info float-right ms-5 w-25' 
                onClick={() => handlePriority('Low')}
              >
                Low
              </button>
            </div>
            <div className="modal-footer justify-content-between">
              <button 
                type="button" 
                onClick={handleCancel} 
                className="btn btn-dark ms-5"
              >
                Cancel
              </button>
              <button 
                type="button" 
                onClick={handleSubmit} 
                className="btn btn-danger ms-5" 
                data-bs-dismiss="modal"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mt-4 justify-content-between">
        <ul className="list-group">
          {tasks.map((item, index) => (
            <li key={index} className="list-group-item mt-4">
              <strong className='ms-auto float-start w-50'>{item.task}</strong>
               <button className='btn border-warning btn-outline-warning'>{item.priority}</button>
              <button 
                className='float-end btn border-dark btn-outline-dark' 
                onClick={() => handleDelete(index)} 
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default More;
