import { EventCollectionDto } from '../../dto/event-collection.dto';

export interface GetEventCollectionServiceInterface {
    getEvents(): Promise<Array<EventCollectionDto>>;
}
