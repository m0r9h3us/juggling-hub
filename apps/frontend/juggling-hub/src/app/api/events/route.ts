import { EventDto } from '@juggling-hub/dto';

import { testEvents } from './_test-data/events';

export async function GET() {
    const events: EventDto[] = testEvents;
    console.log('RUNNING GET EVENTS');
    return Response.json({ data: events });
}