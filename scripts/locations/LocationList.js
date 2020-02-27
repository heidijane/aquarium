import { getLocations } from "./LocationDataProvider.js";
import Location from "./Location.js";

const locationList = () => {
    const arrayOfLocationObjects = getLocations();

    const contentElement = document.querySelector(".locationsList");

    for (const location of arrayOfLocationObjects) {
        contentElement.innerHTML += Location(location);
    }
}

export default locationList;