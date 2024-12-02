// src/components/WorkoutLogForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { saveData, loadData } from '../utils/storage';

function WorkoutLogForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const workoutData = loadData('workoutData') || [];
        const newEntry = {
            date: data.date,
            exercise: data.exercise,
            sets: data.sets,
            reps: data.reps,
            duration: data.duration,
        };
        const updatedData = [...workoutData, newEntry];
        saveData('workoutData', updatedData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 16 }}>
            <TextField
                {...register('date')}
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                required
            />
            <TextField {...register('exercise')} label="Exercise" required />
            <TextField
                {...register('sets')}
                label="Sets"
                type="number"
                required
            />
            <TextField {...register('reps')} label="Reps" type="number" required />
            <TextField
                {...register('duration')}
                label="Duration (min)"
                type="number"
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Log Workout
            </Button>
        </form>
    );
}

export default WorkoutLogForm;
