import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import Week from './components/Week';
import DayExpanded from './components/DayExpanded';

//to run: npx react-scripts start


const sampleData = {
    week: [
        {
            id: 'monday',
            name: 'Monday',
            tasks: [
                { id: 1, title: 'Grocery shopping', description: 'Buy groceries for the week', startTime: '10:00', duration: 2 },
                { id: 2, title: 'Team Meeting', description: 'Weekly sync with the team', startTime: '14:00', duration: 1 },
            ],
        },
        {
            id: 'tuesday',
            name: 'Tuesday',
            tasks: [
                { id: 3, title: 'Workout', description: 'Gym session', startTime: '07:00', duration: 1 },
                { id: 4, title: 'Doctor Appointment', description: 'Routine check-up', startTime: '12:00', duration: 1 },
            ],
        },
        {
            id: 'wednesday',
            name: 'Wednesday',
            tasks: [
                { id: 5, title: 'Car Service', description: 'Take the car for servicing', startTime: '09:00', duration: 3 },
                { id: 6, title: 'Coding Practice', description: 'Solve new algorithms', startTime: '15:00', duration: 2 },
            ],
        },
        {
            id: 'thursday',
            name: 'Thursday',
            tasks: [
                { id: 7, title: 'Networking Event', description: 'Attend local business networking event', startTime: '11:00', duration: 2 },
                { id: 8, title: 'Read Book', description: 'Read new marketing book', startTime: '19:00', duration: 1 },
            ],
        },
        {
            id: 'friday',
            name: 'Friday',
            tasks: [
                { id: 9, title: 'Project Deadline', description: 'Complete and submit project', startTime: '13:00', duration: 3 },
                { id: 10, title: 'Date Night', description: 'Dinner at Italian restaurant', startTime: '20:00', duration: 2 },
            ],
        },
        {
            id: 'saturday',
            name: 'Saturday',
            tasks: [
                { id: 11, title: 'Yoga Class', description: 'Attend morning yoga session', startTime: '08:00', duration: 1 },
                { id: 12, title: 'BBQ Party', description: 'Host a BBQ party for friends', startTime: '17:00', duration: 4 },
            ],
        },
        {
            id: 'sunday',
            name: 'Sunday',
            tasks: [
                { id: 13, title: 'Laundry', description: 'Do the weekly laundry', startTime: '09:00', duration: 2 },
                { id: 14, title: 'Meal Prep', description: 'Prepare meals for the upcoming week', startTime: '14:00', duration: 3 },
            ],
        },
    ],
};

function App() {
    const [days, setDays] = useState(sampleData.week);
    const [activeDay, setActiveDay] = useState(null);


    // When a day is clicked, set it as active
    const handleDayClick = (dayId) => {
        const currentDay = days.find(day => day.id === dayId);
        setActiveDay(currentDay);
    };

    // Function to add a task to the active day
    const addTaskToDay = (dayId, newTask) => {
        setDays(days.map(day => {
            if (day.id === dayId) {
                return { ...day, tasks: [...day.tasks, { ...newTask, id: Date.now() }] }; // Ensure each task has a unique ID
            }
            return day;
        }));
    };

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
                <Container fluid>
                    <Navbar.Brand href="#">Weekly Planner</Navbar.Brand>
                </Container>
            </Navbar>
            <Container fluid>
                <Row className="mb-3">
                    <Col>
                        <h1 className="text-center">Your Weekly Tasks</h1>
                    </Col>
                </Row>
                <Row>
                    <div className="scrollable-row">
                        <Week days={days} onDayClick={handleDayClick} />
                    </div>
                </Row>
                <Row className="mt-3">
                    <Col>
                        {activeDay && (
                            <DayExpanded
                                activeDay={activeDay}
                                addTask={addTaskToDay}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
