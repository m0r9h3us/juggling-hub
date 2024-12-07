import { Module } from '@nestjs/common';
import { GetEventCollectionController } from './get-event-collection.controller';
import { GetEventCollectionService } from './get-event-collection.service';
import { JugglingEdgeApiIntegrationModule } from '@juggling-hub/backend/external/juggling-edge-api';
import { GET_EVENT_COLLECTION_SERVICE } from './get-event-collection.module.di';

@Module({
    imports: [JugglingEdgeApiIntegrationModule],
    providers: [
        {
            provide: GET_EVENT_COLLECTION_SERVICE,
            useClass: GetEventCollectionService
        }
    ],
    controllers: [GetEventCollectionController],
    exports: [GET_EVENT_COLLECTION_SERVICE]
})
export class GetEventsModule {}
