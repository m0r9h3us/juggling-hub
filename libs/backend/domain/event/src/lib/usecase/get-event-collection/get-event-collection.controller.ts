import { Controller, Get, Inject } from '@nestjs/common';
import { GET_EVENTS_SERVICE } from './get-events.module.di';
import { GetEventsServiceInterface as GetEventCollectionServiceInterface } from './get-events.service.interface';

@Controller('events')
export class GetEventCollectionController {
    constructor(
        @Inject(GET_EVENTS_SERVICE)
        private getEventCollectionService: GetEventCollectionServiceInterface
    ) {}

    @Get()
    public async getEvents() {
        return await this.getEventCollectionService.getEvents();
    }
}
