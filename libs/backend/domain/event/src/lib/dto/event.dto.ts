import { Expose } from 'class-transformer';
import { LocationDto, LocationInterface } from './adress.dto';

export interface EventInterface {
    id: string;
    title: string;
    start: string;
    end: string;
    location: LocationInterface;
    description: string;
    websites: Array<string>;
}

export class EventDto implements EventInterface {
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

    constructor(event: EventInterface) {
        this.id = event.id;
        this.title = event.title;
        this.start = event.start;
        this.end = event.end;
        this.location = new LocationDto(event.location);
        this.description = event.description;
        this.websites = event.websites;
    }
}
