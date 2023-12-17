import NavBar from "./NavBar";
import video from "../assets/gif/header.mp4";
import "./Header.scss";

const Header = () => {
    return (
        <>
            <header>
                <NavBar />
                <video autoPlay muted loop className="h-full w-full">
                    <source src={video} type="video/mp4" />
                    Il browser non supporta questa video
                </video>
                <div className="content">
                    <h1 className="big-title">LookThatParty!</h1>
                    <p>Prenota ora la tua serata perfetta🕺🏻💃🏻</p>
                </div>
            </header>
        </>
    );
};

export default Header;
