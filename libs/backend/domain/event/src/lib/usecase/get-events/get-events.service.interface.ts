import { EventDto } from '../../dto/event.dto';

export interface GetEventsServiceInterface {
    getEvents(): Promise<Array<EventDto>>;
}
