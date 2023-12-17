import { EventDetailType, EventType } from "./event.types";

const URL = "https://its-events.davide-mantovani.workers.dev/events";

export const getClubs = async (): Promise<EventType[]> => {
    const res: Response = await fetch(URL);
    if (res.status == 200) {
        const data = (await res.json()) as EventType[];
        return data;
    }
    return [];
};
export const getClubDetails = async (
    id: string
): Promise<EventDetailType | undefined> => {
    const res: Response = await fetch(`${URL}/${id}`);
    if (res.status === 200) {
        const data = (await res.json()) as EventDetailType;
        return data;
    }
    return undefined;
};
