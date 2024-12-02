// src/components/GoalForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

function GoalForm({ onAddGoal }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const newGoal = {
            title: data.title,
            progress: 0,
        };
        onAddGoal(newGoal);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 16 }}>
            <TextField {...register('title')} label="Goal Title" required />
            <Button type="submit" variant="contained" color="primary">
                Add Goal
            </Button>
        </form>
    );
}

export default GoalForm;
