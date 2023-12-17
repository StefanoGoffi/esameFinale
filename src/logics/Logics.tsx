export class Logics {
    /**
     * Sottoclasse di Logics per gestire i metodi di formattazione
     */
    date = {
        /**
         * Metodo di formattazione della data
         * @param date string
         * @returns formattedDate string
         */
        formatt: (date: string): string => {
            const formattedDate: string = new Date(date)
                .toLocaleString("it-IT", {
                    day: "numeric",
                    month: "short",
                    hour: "numeric",
                    minute: "numeric",
                })
                .replace(",", "");
            return formattedDate;
        },
        getHours: (date: string): string => {
            const formattedHours: string = new Date(date).toLocaleString(
                "it-IT",
                {
                    hour: "numeric",
                    minute: "numeric",
                }
            );
            return formattedHours;
        },
        increment: (date: string, numReservation: number): string[] => {
            const list: string[] = [];
            for (let i = 0; i < numReservation; i++) {
                const data: Date = new Date(date);
                data.setTime(data.getTime() + i * 15 * 60 * 1000);
                const formattedData: string = data.toLocaleTimeString("it-IT", {
                    hour: "2-digit",
                    minute: "2-digit",
                });
                list.push(formattedData);
            }
            return list;
        },
    };
    /**
     * Sottoclasse di Logics per gestire i metodi di stilizzazione
     */
    style = {
        /**
         * Metodo di stilizzazione del testo per capitalizzare la prima lettera di ogni frase
         * @param string: string
         * @returns string: string
         */
        capitalize: (string: string): string => {
            return string
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        },
        allergenToIcon: (allergen: string): string => {
            switch (allergen.toLowerCase()) {
                case "dairy":
                    return "🧀";
                case "fish":
                    return "🐟";
                case "gluten":
                    return "🌾";
                case "milk":
                    return "🥛";
                default:
                    return "";
            }
        },
    };
}
