import React from 'react';
import { EventCardProps, EventCard } from './event-card';

type EventCardCollectionProps = {
    events: Array<EventCardProps>;
};

export const EventCardCollection = (props: EventCardCollectionProps) => {
    const { events } = props;

    const renderEventCards = () =>
        events.map((event) => {
            return (
                <li key={event.id} className="flex-grow">
                    <EventCard {...event} priceRange="40-50 €" foodIncluded={true} />
                </li>
            );
        });

    return (
        <ul className="flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {renderEventCards()}
        </ul>
    );
};
