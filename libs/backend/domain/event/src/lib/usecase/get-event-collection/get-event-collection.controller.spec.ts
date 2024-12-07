import { TestBed } from '@suites/unit';
import type { Mocked } from '@suites/unit';
import { GetEventCollectionController } from './get-event-collection.controller';
import { GetEventCollectionService } from './get-event-collection.service';
import { GET_EVENTS_SERVICE } from './get-events.module.di';

describe('EventController', () => {
    let controller: GetEventCollectionController;
    let getEventsService: Mocked<GetEventCollectionService>;

    beforeAll(async () => {
        const { unit, unitRef } = await TestBed.solitary(GetEventCollectionController).compile();

        controller = unit;
        getEventsService = unitRef.get(GET_EVENTS_SERVICE);
    });

    it('should be defined', () => {
        expect(true).toEqual(true);
        expect(controller).toBeDefined();
        expect(getEventsService).toBeDefined();
    });
});
