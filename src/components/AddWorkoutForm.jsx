// src/components/AddWorkoutForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import moment from 'moment-timezone';
import { saveData, loadData } from '../utils/storage';

function AddWorkoutForm({ onAddEvent }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const dateString = `${data.date} ${data.time}`;
        const startDateTime = moment.tz(dateString, 'YYYY-MM-DD HH:mm', 'Asia/Seoul');

        if (!startDateTime.isValid()) {
            alert('유효하지 않은 날짜 또는 시간입니다.');
            return;
        }

        const endDateTime = startDateTime.clone().add(1, 'hours');

        const newEvent = {
            title: data.exercise,
            start: startDateTime.toDate(),
            end: endDateTime.toDate(),
            sets: Number(data.sets),
            reps: Number(data.reps),
            duration: Number(data.duration),
        };

        // 이벤트를 Local Storage에 저장
        const events = loadData('events') || [];
        const updatedEvents = [...events, newEvent];
        saveData('events', updatedEvents);

        // 추가로 workoutData에도 저장
        const workoutData = loadData('workoutData') || [];
        const newWorkoutEntry = {
            date: startDateTime.format('YYYY-MM-DD'),
            exercise: data.exercise,
            sets: Number(data.sets),
            reps: Number(data.reps),
            duration: Number(data.duration),
        };
        const updatedWorkoutData = [...workoutData, newWorkoutEntry];
        saveData('workoutData', updatedWorkoutData);

        // 이벤트 추가 함수 호출 (필요하다면 유지)
        onAddEvent(newEvent);

        alert('Workout added successfully!');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 16 }}>
            <TextField {...register('date')} label="Date" type="date" InputLabelProps={{ shrink: true }} required style={{ marginRight: 16 }} />
            <TextField {...register('time')} label="Time" type="time" InputLabelProps={{ shrink: true }} required style={{ marginRight: 16 }} />
            <TextField {...register('exercise')} label="Exercise" required style={{ marginRight: 16 }} />
            <TextField {...register('sets')} label="Sets" type="number" required style={{ marginRight: 16 }} />
            <TextField {...register('reps')} label="Reps" type="number" required style={{ marginRight: 16 }} />
            <TextField {...register('duration')} label="Duration (mins)" type="number" required style={{ marginRight: 16 }} />
            <Button type="submit" variant="contained" color="primary">Add Workout</Button>
        </form>
    );
}

export default AddWorkoutForm;
