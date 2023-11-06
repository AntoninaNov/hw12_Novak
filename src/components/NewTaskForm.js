// NewTaskForm.js

import React, { useState } from 'react';
import Button from './Button';

const NewTaskForm = ({ onTaskSubmit }) => {
    const [title, setTitle] = useState('');
    const [startTime, setStartTime] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Form validation can also be handled here
        onTaskSubmit({ title, startTime, duration });
        // Clear the form fields after submission
        setTitle('');
        setStartTime('');
        setDuration('');
    };

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="taskTitle">Task Title</label>
                <input type="text" className="form-control" id="taskTitle" value={title} onChange={e => setTitle(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="taskStartTime">Start Time</label>
                <input type="time" className="form-control" id="taskStartTime" value={startTime} onChange={e => setStartTime(e.target.value)} required />
            </div>
            <div className="form-group">
                <label htmlFor="taskDuration">Expected Duration (hours)</label>
                <input type="number" className="form-control" id="taskDuration" value={duration} onChange={e => setDuration(e.target.value)} required min="0" />
            </div>
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    );
};

export default NewTaskForm;
