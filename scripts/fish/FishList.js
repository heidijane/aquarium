import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js"
import Fish from "./Fish.js"

/**
 *  FishList which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module

const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")

    //add the most holy fish (length a multiple of 3) to the DOM first
    let fishes = mostHolyFish()

    // Add to the existing HTML in the content element
    for (const fish of fishes) {
        contentElement.innerHTML += Fish(fish);
    }

    //add the soldier fish (length a multiple of 5) to the DOM second
    fishes = soldierFish()

    // Add to the existing HTML in the content element
    for (const fish of fishes) {
        contentElement.innerHTML += Fish(fish);
    }

    //add the rest of the fish to the DOM last
    fishes = nonHolyFish()

    // Add to the existing HTML in the content element
    for (const fish of fishes) {
        contentElement.innerHTML += Fish(fish);
    }

}

export default FishList