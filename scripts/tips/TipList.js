import { getTips } from "./TipDataProvider.js";
import Tip from "./Tip.js";

const tipList = () => {
    //get data from provider
    const tipArray = getTips();

    //get the HTML element to put the tips
    const contentElement = document.querySelector(".tips")

    //interate the array
    for (const tip of tipArray) {
        contentElement.innerHTML += Tip(tip);
    }

}

export default tipList;