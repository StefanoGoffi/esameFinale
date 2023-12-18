import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav className="flex-no-wrap top-0 w-full z-10 bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link
                    to="/home"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img src={logo} className="h-9" alt="LookThatParty Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        LookThatParty!
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
