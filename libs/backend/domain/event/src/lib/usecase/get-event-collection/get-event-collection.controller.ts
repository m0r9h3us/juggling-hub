import { Controller, Get, Inject } from '@nestjs/common';
import { GET_EVENT_COLLECTION_SERVICE } from './get-event-collection.module.di';
import { GetEventCollectionServiceInterface } from './get-event-collection.service.interface';

@Controller('events')
export class GetEventCollectionController {
    constructor(
        @Inject(GET_EVENT_COLLECTION_SERVICE)
        private getEventCollectionService: GetEventCollectionServiceInterface
    ) {}

    @Get()
    public async getEvents() {
        return await this.getEventCollectionService.getEvents();
    }
}
