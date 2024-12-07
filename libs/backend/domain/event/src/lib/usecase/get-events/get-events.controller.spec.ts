import { TestBed } from '@suites/unit';
import type { Mocked } from '@suites/unit';
import { GetEventsController } from './get-events.controller';
import { GetEventsService } from './get-events.service';
import { GET_EVENTS_SERVICE } from './get-events.module.di';

describe('EventController', () => {
    let controller: GetEventsController;
    let getEventsService: Mocked<GetEventsService>;

    beforeAll(async () => {
        const { unit, unitRef } = await TestBed.solitary(GetEventsController).compile();

        controller = unit;
        getEventsService = unitRef.get(GET_EVENTS_SERVICE);
    });

    it('should be defined', () => {
        expect(true).toEqual(true);
        expect(controller).toBeDefined();
        expect(getEventsService).toBeDefined();
    });
});
