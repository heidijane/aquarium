const locationCollection = [
    {
        locid: "cumberland",
        name: "Cumberland River",
        image: "cumberland_river.jpg",
        country: "United States",
        tips: ["Make sure to avoid barges!"]
    },
    {
        locid: "sumatra",
        name: "Sumatra",
        image: "sumatra.jpg",
        country: "Indonesia",
        tips: ["You may encounter the putrid Corps Lily while hiking through the forest. Be warned!", "Also watch out for Tigers."]
    },
    {
        locid: "australianbight",
        name: "Great Australian Bight",
        image: "australia.jpg",
        country: "Australia",
        tips: ["You may see a southern right whale whale on your dive!"]
    },
    {
        locid: "floridakeys",
        name: "Florida Keys",
        image: "floridakeys.jpg",
        country: "United States",
        tips: ["Watch out for the wild chickens that live all over the islands."]
    },
    {
        locid: "deepsea",
        name: "???",
        image: "deepsea.jpg",
        country: "???",
        tips: ["You will need a deep sea submersible to harvest fish from the deep sea.", "The pressure in the deepest part of the ocean can be 1,071 more than standard atmospheric levels."]
    },
    {
        locid: "ryukyu",
        name: "Ryukyu Islands",
        image: "ryukyuislands.jpg",
        country: "Japan",
        tips: ["Typhoons are common, so be prepared!"]
    },
    {
        locid: "texas",
        name: "Texas",
        image: "texas.jpg",
        country: "United States",
        tips: ["The lightning whelk is the official state shell of Texas!"]
    },
    {
        locid: "amnestybay",
        name: "Amnesty Bay",
        image: "amnestybay.jpg",
        country: "United States",
        tips: ["Don't forget to checkout the Curry Lighthouse, the famous local landmark!"]
    }
];

export const getLocations = () => {
    return locationCollection.slice();
}