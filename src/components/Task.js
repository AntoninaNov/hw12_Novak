import React from 'react';
import Button from './Button';

const Task = ({ task }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <p className="card-text">
                    <small className="text-muted">
                        {task.startTime} - {task.endTime}
                    </small>
                </p>
                <Button text="Edit" />
            </div>
        </div>
    );
};

export default Task;
