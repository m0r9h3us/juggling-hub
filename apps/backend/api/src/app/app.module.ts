import { Module } from '@nestjs/common';
import { GetEventsModule } from '@juggling-hub/libs-backend-bounded-context-event';

@Module({
    imports: [GetEventsModule],

    controllers: [],
    providers: []
})
export class AppModule {}
