// src/pages/Schedule.js
import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment-timezone';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import AddWorkoutForm from '../components/AddWorkoutForm';
import Notification from '../components/Notification';
import { saveData, loadData } from '../utils/storage';

// 로케일 및 타임존 설정
moment.locale('ko');
moment.tz.setDefault('Asia/Seoul');

const localizer = momentLocalizer(moment);

function Schedule() {
    const [events, setEvents] = useState(loadData('events') || []);

    const addEvent = (event) => {
        console.log('New Event:', event);
        console.log('Start Type:', typeof event.start, event.start instanceof Date);
        console.log('End Type:', typeof event.end, event.end instanceof Date);

        if (!(event.start instanceof Date) || isNaN(event.start)) {
            console.error('Invalid start date');
            return;
        }
        if (!(event.end instanceof Date) || isNaN(event.end)) {
            console.error('Invalid end date');
            return;
        }

        const updatedEvents = [...events, event];
        setEvents(updatedEvents);
        saveData('events', updatedEvents);
    };

    useEffect(() => {
        saveData('events', events);
    }, [events]);

    return (
        <div style={{ padding: 16 }}>
            <h2>Schedule</h2>
            <AddWorkoutForm onAddEvent={addEvent} />
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                culture="ko"
                // views 속성을 'month'로 설정하여 Month 뷰만 표시
                views={['month']}
                style={{ height: 500 }}
            />
            <Notification upcomingEvents={events} />
        </div>
    );
}

export default Schedule;
