import { EventCollectionDto } from '../../dto/event-collection.dto';

export interface GetEventsServiceInterface {
    getEvents(): Promise<Array<EventCollectionDto>>;
}
