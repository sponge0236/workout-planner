// src/pages/Goals.jsx
import React, { useState } from 'react';
import { Typography, LinearProgress } from '@mui/material';
import GoalForm from '../components/GoalForm';
import { saveData, loadData } from '../utils/storage';

function Goals() {
    const [goals, setGoals] = useState(loadData('goals') || []);

    const addGoal = (goal) => {
        const updatedGoals = [...goals, goal];
        setGoals(updatedGoals);
        saveData('goals', updatedGoals);
    };

    return (
        <div style={{ padding: 16 }}>
            <Typography variant="h4" gutterBottom>
                Goals
            </Typography>
            <GoalForm onAddGoal={addGoal} />
            {goals.map((goal, index) => (
                <div key={index} style={{ marginBottom: 16 }}>
                    <Typography variant="h6">{goal.title}</Typography>
                    <LinearProgress variant="determinate" value={goal.progress} />
                </div>
            ))}
        </div>
    );
}

export default Goals;
