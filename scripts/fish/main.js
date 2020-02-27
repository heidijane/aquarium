import initializeDetailButtonEvents from '../dialogs.js';
import FishList from './FishList.js';
import tipList from '../tips/TipList.js';
// If the export is default no curly braces, if no default than put the function name in {}

FishList(); //initialize the fish first before the buttons!

tipList();

initializeDetailButtonEvents();