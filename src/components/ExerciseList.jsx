// src/components/ExerciseList.js
import React from 'react';
import exercises from '../data/exercises.json';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function ExerciseList() {
    return (
        <List>
            {exercises.map((exercise) => (
                <ListItem
                    button
                    component={Link}
                    to={`/tutorials/${exercise.id}`}
                    key={exercise.id}
                >
                    <ListItemText primary={exercise.name} secondary={exercise.level} />
                </ListItem>
            ))}
        </List>
    );
}

export default ExerciseList;
