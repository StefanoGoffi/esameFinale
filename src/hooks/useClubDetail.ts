import { useState } from "react";
import { EventDetailType } from "../repo/event.types";
import { getClubDetails } from "../repo";

export const useClubDetail = () => {
    //spazio di memoria in cui dichiarare se l'API sta caricando o meno. Inizialmente è true
    const [isLoading, setIsLoading] = useState<boolean>(true);
    //spazio di memoria in cui caricare gli utenti ricevuti tramite API. Inizialmente è vuoto
    const [club, setClubDetail] = useState<EventDetailType>();
    //il seguente useEffect carica la lista degli utenti all'avvio del componente (nessuna dipendenza specificata nell'array delle dipendenze)
    const getDetail = (id: string) => {
        getClubDetails(id).then((club) => {
            setClubDetail(club);
            //imposto isLoadinga a false perchè il caricamento è terminato
            setTimeout(() => {
                //imposto un timout per testare il componente di loading
                setIsLoading(false);
            }, 0);
        });
    };
    return { club, getDetail, isLoading };
};
