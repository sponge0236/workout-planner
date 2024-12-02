// src/pages/Tutorials.js
import React from 'react';
import { Typography } from '@mui/material';
import ExerciseList from '../components/ExerciseList';

function Tutorials() {
    return (
        <div style={{ padding: 16 }}>
            <Typography variant="h4" gutterBottom>
                Exercise Tutorials
            </Typography>
            <ExerciseList />
        </div>
    );
}

export default Tutorials;
