import { EventDetailType } from "../repo/event.types";
import { Logics } from "../logics/Logics";
import "./EventCard.scss";
import Dish from "./Dish";
import NavBar from "./NavBar";
import Reservation from "./Reservation";

const Logica = new Logics();
type ClubCardDetailType = {
    club: EventDetailType;
};
const EventCardDetail = ({ club }: ClubCardDetailType) => {
    const {
        id,
        name,
        description,
        date,
        isAperitivoIncluded,
        tags,
        price,
        coverImage,
        dresscode,
        includedDrinks,
        includedDishes,
    } = club;
    return (
        <>
            <div className="dark:bg-gray-800">
                <div className="max-w ">
                    <div className="flex flex-wrap">
                        <div className="md:sticky top-0 overflow-hidden w-full md:h-1/2 h-screen md:w-1/2 flex items-center justify-center flex-col">
                            <NavBar />
                            <img
                                className="h-full w-full "
                                src={coverImage}
                                alt={`${name} poster`}
                            />
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-5">
                                <div className="mb-3 border-b border-gray-700 pb-5">
                                    <h2
                                        title={`id: ${id} `}
                                        className="max-w-xl mt-6 mb-3 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300"
                                    >
                                        {Logica.style.capitalize(name)}
                                    </h2>
                                    <p className="inline-block text-xl  mb-3 font-semibold text-gray-700 dark:text-gray-400 ">
                                        <span>{description.short}</span>
                                    </p>
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
                                                <span className="text-green-400">
                                                    $
                                                </span>
                                            </span>
                                        </div>
                                        <div className="flex items-center mr-4">
                                            <span className="text-xl ml-2 text-gray-300">
                                                {isAperitivoIncluded ? (
                                                    <div title="Aperitivo Incluso">
                                                        🍻✅
                                                    </div>
                                                ) : (
                                                    <div title="Aperitivo Non Incluso">
                                                        🍻❌
                                                    </div>
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-start">
                                        <div className="inline-block relative py-1 mb-3 text-sm">
                                            <div className="absolute inset-0 text-blue-300 flex">
                                                <svg
                                                    height="100%"
                                                    viewBox="0 0 50 100"
                                                >
                                                    <path
                                                        d="M49.9,0a17.1,17.1,0,0,0-12,5L5,37.9A17,17,0,0,0,5,62L37.9,94.9a17.1,17.1,0,0,0,12,5ZM25.4,59.4a9.5,9.5,0,1,1,9.5-9.5A9.5,9.5,0,0,1,25.4,59.4Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <div className="flex-grow h-full -ml-px bg-blue-300 rounded-md rounded-l-none"></div>
                                            </div>
                                            <span className="text-center relative  text-blue-600 uppercase font-semibold">
                                                <span>
                                                    &nbsp;&nbsp;&nbsp;👔
                                                </span>{" "}
                                                {dresscode}
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
                                <div className="mb-6 pb-5 border-b border-gray-700">
                                    <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                        Description Event :
                                    </h2>
                                    <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl ">
                                        <div className="p-3 lg:p-5">
                                            <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                                                <ul className="w-full space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                                    {description.long.map(
                                                        (element, index) => (
                                                            <li
                                                                key={index}
                                                                className="flex items-center py-3 border-b border-gray-700"
                                                            >
                                                                <svg
                                                                    className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                                                    aria-hidden="true"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                                                </svg>
                                                                {element}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {includedDishes ? (
                                    <div className="pt-0 pb-6 mb-6 border-b border-gray-200 dark:border-gray-700">
                                        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                            Dishes Menù:
                                        </h2>
                                        <div className="bg-gray-100 dark:bg-gray-700 rounded-3xl">
                                            <div className="p-3 lg:p-5">
                                                <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                                                    <ul className="w-full space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                                        {includedDishes.map(
                                                            (dish, index) => (
                                                                <Dish
                                                                    key={index}
                                                                    dish={dish}
                                                                />
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <h2 className=" text-center text-lg font-bold dark:text-gray-400 pb-6 border-b border-gray-700">
                                        ❌
                                        {Logica.style.capitalize(
                                            "no dishes include, come already eaten"
                                        )}
                                        ❌
                                    </h2>
                                )}
                                <div id="prenotation" className="mb-6">
                                    <Reservation data={club} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventCardDetail;
