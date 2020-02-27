import { useFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"

/**
 *  FishList which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    // Add to the existing HTML in the content element
    for (const fish of fishes) {
        contentElement.innerHTML += Fish(fish);
    }
    
}

export default FishList