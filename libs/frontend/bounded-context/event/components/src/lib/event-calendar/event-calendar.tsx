'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './event-calendar.css';

import { EventInput } from '@fullcalendar/core';

export type EventCalendarProps = {
    events: EventInput[];
};

export const EventCalendar = (props: EventCalendarProps) => {
    const { events } = props;

    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
                left: 'prev,next',
                right: 'title'
            }}
            handleWindowResize={true}
            editable={false}
            events={events}
            eventClick={(info) => {
                alert(info + info.event.id);
            }}
        />
    );
};
