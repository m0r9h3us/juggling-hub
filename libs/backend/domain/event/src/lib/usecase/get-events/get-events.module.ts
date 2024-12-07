import { Module } from '@nestjs/common';
import { GetEventsController } from './get-events.controller';
import { GetEventsService } from './get-events.service';
import { JugglingEdgeApiIntegrationModule } from '@juggling-hub/backend/external/juggling-edge-api';
import { GET_EVENTS_SERVICE } from './get-events.module.di';

@Module({
    imports: [JugglingEdgeApiIntegrationModule],
    providers: [
        {
            provide: GET_EVENTS_SERVICE,
            useClass: GetEventsService
        }
    ],
    controllers: [GetEventsController],
    exports: [GET_EVENTS_SERVICE]
})
export class GetEventsModule {}
