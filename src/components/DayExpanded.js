import React from "react";
import NewTaskForm from "./NewTaskForm";
import Task from "./Task";
import Button from "./Button";

const DayExpandedView = ({ selectedDay, onTaskAdded, onTaskRemoved, dayTasks }) => {

    // Add a new task to the selected day
    const handleTaskCreation = (taskData) => {
        onTaskAdded(selectedDay, taskData);
    };

    // Remove an existing task from the selected day
    const handleTaskDeletion = (taskId) => {
        onTaskRemoved(selectedDay, taskId);
    };

    return (
        <div className="day-expanded">
            <h5 className="day-expanded-title">Day: {selectedDay}</h5>
            <NewTaskForm onTaskSubmit={handleTaskCreation} />
            <div className="task-list">
                {dayTasks.length > 0 ? (
                    dayTasks.map((task, index) => (
                        <div key={index} className="task-item">
                            <Task title={task.title} description={task.description} startTime={task.startTime} endTime={task.endTime} />
                            <Button text="Remove" onClick={() => handleTaskDeletion(task.id)} />
                        </div>
                    ))
                ) : (
                    <p className="text-muted">No tasks have been added yet.</p>
                )}
            </div>
        </div>
    );
};

export default DayExpandedView;
