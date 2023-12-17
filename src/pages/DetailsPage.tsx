import { useParams } from "react-router-dom";
import { useClubDetail } from "../hooks/useClubDetail.js";
import { useEffect } from "react";
import EventCardDetail from "../components/EventCardDetail.js";

const DetailPage = () => {
    const { id } = useParams();
    const { isLoading, getDetail, club } = useClubDetail();
    useEffect(() => {
        if (id) {
            getDetail(id);
        }
    }, [id]);
    if (isLoading || !club) {
        return <p>Caricamento...</p>;
    }
    return <EventCardDetail key={club.id} club={club} />;
};
export default DetailPage;
