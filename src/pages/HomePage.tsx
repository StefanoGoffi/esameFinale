import EventCard from "../components/EventCard";
import Header from "../components/Header";
import { useClubs } from "../hooks/useClubs";
const HomePage = () => {
    const { clubs, isLoading } = useClubs();
    if (isLoading) {
        return <p className="text-white-900">Caricamento...</p>;
    }
    return (
        <div>
            <Header />
            <div
                id="deck"
                className="px-1 flex flex-col justify-center content-center"
            >
                {clubs.map((club, index) => (
                    <EventCard
                        key={index}
                        club={club}
                        goToDetail={`/dettaglio/${club.id}`}
                    />
                ))}
            </div>
            <div id="prenotation"></div>
        </div>
    );
};
export default HomePage;
