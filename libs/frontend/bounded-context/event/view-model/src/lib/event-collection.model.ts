import { Dayjs } from 'dayjs';

export type EventCollectionModel = {
    id: string;
    title: string;
    start: Dayjs;
    end: Dayjs;
    country: string;
    city?: string;
    description: string;
};
