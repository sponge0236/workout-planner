// src/components/Notification.js
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification({ upcomingEvents }) {
    useEffect(() => {
        const now = new Date();
        upcomingEvents.forEach((event) => {
            const timeUntilEvent = new Date(event.start) - now;
            if (timeUntilEvent > 0 && timeUntilEvent < 60000) {
                toast.info(
                    `Upcoming workout: ${event.title} in ${Math.floor(
                        timeUntilEvent / 1000
                    )} seconds`
                );
            }
        });
    }, [upcomingEvents]);

    return <ToastContainer />;
}

export default Notification;
