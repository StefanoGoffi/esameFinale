import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { EventType } from "../repo/event.types";
import "./EventCard.scss";
import { Logics } from "../logics/Logics";
type ClubCardType = {
    club: EventType;
    goToDetail: string;
};
const Logica = new Logics();
const EventCard = ({ club, goToDetail }: ClubCardType) => {
    const {
        name,
        includedDrinks,
        tags,
        description,
        isAperitivoIncluded,
        dresscode,
        coverImage,
        date,
        price,
    } = club;
    return (
        <div
            id="card"
            className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md  dark:border-gray-700 dark:bg-gray-800 mb-4"
        >
            <img
                className="object-cover w-1/2 h-1/2 md:h-auto md:w-1/2"
                src={coverImage}
                alt={`${name} poster`}
            />
            <div className="flex w-full justify-items-center flex-col p-4">
                <h3 className="mb-2 text-2xl text-center border-b border-gray-300 pb-3 font-semibold text-gray-900 dark:text-white">
                    {name}
                </h3>
                <p className="mb-3 text-xl text-gray-700 dark:text-gray-400">
                    {description.short}
                </p>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center mr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                                />
                            </svg>
                            <span className="text-xl mx-2 text-gray-300">
                                {Logica.date.formatt(date)}
                            </span>
                            <span className="text-xl text-gray-300"></span>
                        </div>
                        <div className="flex items-center mr-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                                />
                            </svg>
                            <span className="text-xl ml-2 text-gray-300">
                                {price}
                                <span className="text-green-400">$</span>
                            </span>
                        </div>
                        <div className="flex items-center mr-4">
                            <span className="text-xl ml-2 text-gray-300">
                                {isAperitivoIncluded ? (
                                    <div title="Aperitivo Incluso">🍻✅</div>
                                ) : (
                                    <div title="Aperitivo Non Incluso">
                                        🍻❌
                                    </div>
                                )}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="inline-block relative py-1 mb-3 text-sm">
                            <div className="absolute inset-0 text-yellow-300 flex">
                                <svg height="100%" viewBox="0 0 50 100">
                                    <path
                                        d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div className="flex-grow h-full -ml-px bg-yellow-300 rounded-md rounded-l-none"></div>
                            </div>
                            <span className="text-center relative  text-yellow-600 uppercase font-semibold">
                                <span>&nbsp;&nbsp;&nbsp;👔</span> {dresscode}
                                <span>&nbsp;</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        {tags &&
                            tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="w-1/3 text-center inline-block bg-orange-600 rounded-full px-2 py-1 text-sm font-semibold text-white mb-2"
                                >
                                    #{tag}
                                </span>
                            ))}
                    </div>
                    <div className="flex space-x-2 justify-center">
                        {includedDrinks &&
                            includedDrinks.map((drink, i) => (
                                <span
                                    key={i}
                                    className="w-1/3 h-auto aspect-auto text-center inline-block flex justify-center items-center bg-purple-600 rounded-full px-2 py-1 text-sm font-semibold text-white"
                                >
                                    {drink}
                                </span>
                            ))}
                    </div>
                </div>
                <Link
                    to={goToDetail}
                    className="btn md:h-full flex justify-center mt-4 lg:h-1/2 py-3 ms:mt-9 items-center rounded-xl bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                >
                    Più Informazioni
                </Link>
                {
                    // secondo pulsante per lo scroll automatico all'elemento con id non implementato, non scrolla e non capisco perchè
                }
                <HashLink
                    to={`${goToDetail}#prenotation`}
                    className="btn md:h-full flex justify-center mt-4 lg:h-1/2 py-3 ms:mt-9 items-center rounded-xl bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
                >
                    Prenota Ora!
                </HashLink>
            </div>
        </div>
    );
};

export default EventCard;
