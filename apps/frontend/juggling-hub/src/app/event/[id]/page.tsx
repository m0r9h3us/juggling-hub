import { getMockEvents } from '@juggling-hub/frontend/bounded-context/event/api-client';
import { notFound } from 'next/navigation';

export type Props = {
    id: string;
};

export type Params = {
    params: Promise<Props>;
};

export default async function Page({ params }: { params: Promise<Props> }) {
    const { id } = await params;
    const eventData = getMockEvents();
    const event = eventData.find((event) => event.id === id);
    if (!event) {
        notFound();
    }

    return <div>ConventionId: {id}</div>;
}
