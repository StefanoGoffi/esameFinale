import { Logics } from "../logics/Logics";
import { useState } from "react";
import Success from "./Success";
const Logica = new Logics();
const Reservation = ({ data }: any) => {
    const dateClean = data.date;
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const handleButtonClick = (index: number, date: string) => {
        // Aggiorna lo stato dei bottoni quando vengono cliccati
        const newDate = [...dateClean];
        newDate[index] = !newDate[index]; // Aggiorna lo stato attivo/inattivo del bottone cliccato
        data.reservation = date; // salvo l'rario di prenotazione in una proprietà di data
        // Verifica se almeno uno dei bottoni è attivo
        const atLeastOneActive = newDate.some((data) => data);
        setIsButtonActive(atLeastOneActive); // Aggiorna lo stato del pulsante "Prenota"
    };
    const modalOpen = () => {
        setModalOpen(true);
        document.getElementsByTagName("body")[0].style.display = "block";
    };
    const dateList = Logica.date.increment(dateClean, 6);
    return (
        <>
            <div className="flex justify-between w-full mt-3">
                {dateList.map((data: string, i: number) => (
                    <button
                        key={i}
                        onClick={() => handleButtonClick(i, data)}
                        className={`w-1/4 md:w-1/3 hover:cursor-pointer transition duration-300 ease-in-out hover:scale-110 m-1 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300 py-5 rounded-3xl text-center ${
                            data ? "active" : ""
                        }`}
                    >
                        {data}
                    </button>
                ))}
            </div>
            <div>
                <div className="flex gap-4 my-3">
                    <button
                        data-modal-target="default-modal"
                        data-modal-toggle="default-modal"
                        disabled={!isButtonActive}
                        className={`cursor-pointer w-full px-4 py-3 text-center text-gray-100 bg-purple-600 border border-transparent dark:border-gray-700 hover:border-purple-500 hover:text-purple-700 hover:bg-purple-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl ${
                            !isButtonActive ? "" : "animate-pulse"
                        }`}
                        onClick={() => modalOpen()}
                    >
                        Prenota
                    </button>
                </div>
                {isModalOpen ? <Success data={data} /> : null}
            </div>
        </>
    );
};

export default Reservation;
