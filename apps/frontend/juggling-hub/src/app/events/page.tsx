import { Separator, Switch } from '@juggling-hub/frontend/primitives';
// import { EventCardProps } from '@juggling-hub/frontend/bounded-context/event/components';
import { fetchEventCollectionData } from '@juggling-hub/frontend/bounded-context/event/api-client';
import { EventCardCollection } from '@juggling-hub/frontend/bounded-context/event/components';

export default async function Events() {
    const { data, error } = await fetchEventCollectionData();
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex flex-col flex-1 gap-4 py-4 px-2">
            <div className="flex flex-col align-start gap-4 pb-2 md:flex-row md:justify-between md:items-center">
                <h1 className="text-3xl font-bold">Juggling events</h1>
                <span className="inline-flex items-center">
                    <Switch /> <span className="px-2">List View</span>
                </span>
            </div>
            <Separator />
            <div className="pt-2">
                <EventCardCollection events={data} />
            </div>
        </div>
    );
}
