import { useFish } from './FishDataProvider.js';
import initializeDetailButtonEvents from './dialogs.js';
// If the export is default no curly braces, if no default than put the function name in {}

initializeDetailButtonEvents();

const arrayOfAllFishObjects = useFish();

for (const fish of arrayOfAllFishObjects) {
    console.log(fish);
}