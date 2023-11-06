import React from 'react';
import Task from './Task';

const Day = ({ day }) => {
    return (
        <div className="col">
            <h2 className="text-center">{day.name}</h2>
            {day.tasks.map((task, index) => (
                <Task key={index} task={task} />
            ))}
        </div>
    );
};

export default Day;
