// src/pages/ExerciseDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import exercises from '../data/exercises.json';
import ReactPlayer from 'react-player';
import { Typography } from '@mui/material';

function ExerciseDetail() {
    const { id } = useParams();
    const exercise = exercises.find((ex) => ex.id === parseInt(id));

    return (
        <div style={{ padding: 16 }}>
            <Typography variant="h4" gutterBottom>
                {exercise.name}
            </Typography>
            <Typography variant="subtitle1">{exercise.description}</Typography>
            <ReactPlayer url={exercise.videoUrl} controls />
        </div>
    );
}

export default ExerciseDetail;
