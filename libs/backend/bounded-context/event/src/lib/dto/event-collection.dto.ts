import { Expose } from 'class-transformer';
import { LocationDto, LocationInterface } from './adress.dto';

export interface EventCollectionInterface {
    id: string;
    title: string;
    start: string;
    end: string;
    location: LocationInterface;
    description: string;
    websites: Array<string>;
}

export class EventCollectionDto implements EventCollectionInterface {
    @Expose()
    id: string;

    @Expose()
    title: string;

    @Expose()
    start: string;

    @Expose()
    end: string;

    @Expose()
    location: LocationDto;

    @Expose()
    description: string;

    @Expose()
    websites: Array<string>;

    constructor(event: EventCollectionInterface) {
        this.id = event.id;
        this.title = event.title;
        this.start = event.start;
        this.end = event.end;
        this.location = new LocationDto(event.location);
        this.description = event.description;
        this.websites = event.websites;
    }
}
