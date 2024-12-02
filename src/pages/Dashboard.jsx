// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { loadData } from '../utils/storage';
import moment from 'moment';

function Dashboard() {
    const [recentActivities, setRecentActivities] = useState([]);

    useEffect(() => {
        const data = loadData('events') || [];
        const sortedData = data.sort((a, b) => new Date(b.start) - new Date(a.start));
        setRecentActivities(sortedData.slice(0, 5));
    }, []);

    return (
        <div style={{ padding: 16 }}>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>
            <Typography variant="h6" gutterBottom>
                Recent Activities
            </Typography>
            <List>
                {recentActivities.map((activity, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={`${activity.title} - ${moment(activity.start).format('YYYY-MM-DD HH:mm')}`}
                            secondary={`Sets: ${activity.sets}, Reps: ${activity.reps}, Duration: ${activity.duration} mins`}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Dashboard;
