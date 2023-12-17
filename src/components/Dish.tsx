import { Logics } from "../logics/Logics";
const Logica = new Logics();
import { DishesType } from "../repo/event.types";
type DishType = {
    dish: DishesType;
};
const Dish = ({ dish }: DishType) => {
    return (
        <li className="flex items-center border-b border-gray-700 pb-2">
            <div className="flex flex-row w-full">
                <div className="w-full lg:text-start text-center">
                    <div className="flex flex-col">
                        <h4 className="font-bold">{dish.name}</h4>
                        <div className="italic">{dish.description}</div>
                        <div>
                            {dish.allergens &&
                                dish.allergens.map((allergen, index) => (
                                    <span key={index}>
                                        {Logica.style.allergenToIcon(allergen)}
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Dish;
