// import { Logics } from "../logics/Logics";
// const Logica = new Logics();
import { EventDetailType } from "../repo/event.types";

import { Link } from "react-router-dom";
type ClubCardDetailType = {
    data: EventDetailType;
};
const Success = ({ data }: ClubCardDetailType) => {
    console.log(data);
    return (
        <>
            <div className="z-10 fixed top-0 overflow-x-hidden right-0 left-0 w-full bg-slate-950 h-screen opacity-75"></div>
            <div className="rounded-xl overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-full">
                <div className=" rounded-3xl bg-gray-700 flex justify-center items-center h-5/6">
                    <div className="bg-gray-700 p-6 md:mx-auto">
                        <svg
                            viewBox="0 0 24 24"
                            className="text-green-600 w-16 h-16 mx-auto my-6"
                        >
                            <path
                                fill="currentColor"
                                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                            ></path>
                        </svg>
                        <div className="text-center">
                            <h3 className="md:text-2xl text-base text-gray-400 font-semibold text-center">
                                Reservation Done!
                            </h3>
                            <p className="text-gray-400 my-2">
                                Thank you for completing your booking:
                            </p>
                            <p className="text-gray-200 my-2">
                                {data.name} at: {data.reservation}
                            </p>
                            <p className="text-gray-400"> Have a great day! </p>
                            <div className="py-10 text-center">
                                <Link
                                    to={"/home"}
                                    className="btn md:h-full flex justify-center mt-4 lg:h-1/2 py-3 ms:mt-9 items-center rounded-xl bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
                                >
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Success;
