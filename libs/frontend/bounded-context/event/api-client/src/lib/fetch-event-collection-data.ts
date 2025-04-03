import { EventCollectionModel } from '@juggling-hub/frontend/view-model';
import { apiClient } from './api-client';
import dayjs from 'dayjs';

export const fetchEventCollectionData = async () => {
    try {
        const { data, error } = await apiClient.GET('/api/events');
        if (error) {
            return { data: null, error };
        }
        const events: Array<EventCollectionModel> = data.map((event) => ({
            id: event.id,
            title: event.title,
            start: dayjs(event.start),
            end: dayjs(event.end),
            city: event.location.city,
            country: event.location.country,
            description: event.description
        }));
        return { data: events, error: null };
    } catch (fetchError) {
        // Handle network or unexpected fetch-related errors
        console.error('Fetch failed:', fetchError);
        return { data: null, error: fetchError as Error };
    }
};
