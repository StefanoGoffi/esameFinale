import { useEffect, useState } from "react";
import { EventType } from "../repo/event.types";
import { getClubs } from "../repo";

export const useClubs = () => {
    //spazio di memoria in cui dichiarare se l'API sta caricando o meno. Inizialmente è true
    const [isLoading, setIsLoading] = useState<boolean>(true);
    //spazio di memoria in cui caricare gli utenti ricevuti tramite API. Inizialmente è vuoto
    const [clubs, setClubs] = useState<EventType[]>([]);
    //il seguente useEffect carica la lista degli utenti all'avvio del componente (nessuna dipendenza specificata nell'array delle dipendenze)
    useEffect(() => {
        //chiamo l'API getUsers
        getClubs().then((clubs) => {
            //salvo la risposta (users: UserType[]) nello stato
            setClubs(clubs);
            //imposto isLoadinga a false perchè il caricamento è terminato
            setTimeout(() => {
                //imposto un timout per testare il componente di loading
                setIsLoading(false);
            }, 0);
        });
    }, []);
    //ritorno un oggetto contenente le informazione che servono alla vista
    return { clubs, isLoading };
};
