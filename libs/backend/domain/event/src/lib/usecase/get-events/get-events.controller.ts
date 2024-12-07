import { Controller, Get, Inject } from '@nestjs/common';
import { GET_EVENTS_SERVICE } from './get-events.module.di';
import { GetEventsServiceInterface } from './get-events.service.interface';

@Controller('events')
export class GetEventsController {
    constructor(@Inject(GET_EVENTS_SERVICE) private getEventsService: GetEventsServiceInterface) {}

    @Get()
    public async getEvents() {
        return await this.getEventsService.getEvents();
    }
}
