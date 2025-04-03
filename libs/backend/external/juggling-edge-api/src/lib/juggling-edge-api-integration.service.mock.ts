import { Injectable, Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { jugglingEdgeMockEvents } from '@juggling-hub/shared/bounded-context/event/data';
import { JugglingEdgeEventCollectionDto, JugglingEdgeEventDto } from './juggling-edge-event.dto';

@Injectable()
export class JugglingEdgeApiIntegrationHttpServiceMock {
    private readonly logger = new Logger(JugglingEdgeApiIntegrationHttpServiceMock.name);

    public async getEvents() {
        console.dir(jugglingEdgeMockEvents);
        const events = plainToInstance(JugglingEdgeEventDto, jugglingEdgeMockEvents, {
            enableImplicitConversion: true
        });

        const errors = await validate(new JugglingEdgeEventCollectionDto(events), {
            skipMissingProperties: false,
            skipNullProperties: false
        });
        if (errors.length > 0) {
            this.logger.error('Validation failed!', errors);
            throw new Error('Validation failed!');
        }

        return events;
    }
}
