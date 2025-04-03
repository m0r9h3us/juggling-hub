import { Inject, Injectable, Logger } from '@nestjs/common';
import { GetEventCollectionServiceInterface } from './get-event-collection.service.interface';
import { LocationDto } from '../../dto/adress.dto';
import { EventCollectionDto } from '../../dto/event-collection.dto';
import {
    JUGGLING_EDGE_API_INTEGRATION_SERVICE,
    JugglingEdgeApiIntegrationServiceInterface
} from '@juggling-hub/backend/external/juggling-edge-api';

@Injectable()
export class GetEventCollectionService implements GetEventCollectionServiceInterface {
    private readonly logger = new Logger('GetEventsService');

    constructor(
        @Inject(JUGGLING_EDGE_API_INTEGRATION_SERVICE)
        private readonly httpService: JugglingEdgeApiIntegrationServiceInterface
    ) {}

    public async getEvents() {
        const events = await this.httpService.getEvents();
        return events.map((event): EventCollectionDto => {
            return new EventCollectionDto({
                id: event.eventID.toString(),
                title: event.fullTitle,
                description: event.blurb,
                start: event.startDate,
                end: event.startDate,
                location: new LocationDto({
                    country: event.country,
                    latitude: event.lat,
                    longitude: event.lng
                }),
                websites: event.urls
            });
        });
    }
}
