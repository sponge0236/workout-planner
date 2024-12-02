// src/pages/Statistics.js
import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';
import { loadData } from '../utils/storage';

function Statistics() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const workoutData = loadData('workoutData') || [];
        console.log('Loaded workoutData:', workoutData);

        // 날짜 순으로 정렬
        const sortedData = workoutData.sort((a, b) => new Date(a.date) - new Date(b.date));

        // 필요한 데이터 가공
        const processedData = sortedData.map(item => ({
            date: item.date,
            duration: item.duration,
        }));

        console.log('Processed data for chart:', processedData);

        setData(processedData);
    }, []);

    return (
        <div style={{ padding: 16 }}>
            <Typography variant="h4" gutterBottom>
                Statistics
            </Typography>
            <LineChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis
                    label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="duration"
                    stroke="#8884d8"
                    name="Workout Time"
                />
            </LineChart>
        </div>
    );
}

export default Statistics;
