// src/pages/Nutrition.js
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { saveData, loadData } from '../utils/storage';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

function Nutrition() {
    const [intake, setIntake] = useState(loadData('intake') || []);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const newEntry = {
            date: data.date,
            calories: parseInt(data.calories),
        };
        const updatedIntake = [...intake, newEntry];
        setIntake(updatedIntake);
        saveData('intake', updatedIntake);
    };

    return (
        <div style={{ padding: 16 }}>
            <h2>Nutrition</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register('date')}
                    label="Date"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    required
                />
                <TextField
                    {...register('calories')}
                    label="Calories"
                    type="number"
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Add Entry
                </Button>
            </form>
            <LineChart width={600} height={300} data={intake}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis
                    label={{ value: 'Calories', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="calories"
                    stroke="#8884d8"
                    name="Calorie Intake"
                />
            </LineChart>
        </div>
    );
}

export default Nutrition;
