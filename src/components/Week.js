import React from 'react';
import Day from './Day';

const Week = ({ days, onDayClick }) => {
    return (
        <div className="container">
            <div className="row">
                {days.map((day, index) => (
                    <Day key={index} day={day} onDayClick={() => onDayClick(day.name)} />
                ))}
            </div>
        </div>
    );
};

export default Week;
