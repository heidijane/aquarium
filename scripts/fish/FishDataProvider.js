const fishCollection = [{
        name: "Betty",
        species: "Longtooth Barracuda",
        length: 25,
        diet: ["squid", "humans"],
        location: "Cumberland River",
        image: "betty.jpg"
    },
    {
        name: "Goober",
        species: "Clown Loach",
        length: 7,
        diet: ["snails", "sinking pellets"],
        location: "Sumatra",
        image: "clownloach.jpg"
    },
    {
        name: "Seabiscuit",
        species: "Leafy Sea Dragon",
        length: 9,
        diet: ["plankton"],
        location: "South Australia",
        image: "seadragon.jpg"
    },
    {
        name: "Frank",
        species: "Hammerhead Shark",
        length: 185,
        diet: ["fish"],
        location: "Florida Keys",
        image: "hammerhead.jpg"
    },
    {
        name: "Flarp",
        species: "Blobfish",
        length: 11,
        diet: ["???"],
        location: "Tasmania",
        image: "blobfish.jpg"
    },
    {
        name: "Jerry",
        species: "Longhorn Cowfish",
        length: 20,
        diet: ["crustaceans", "small fish", "jellyfish"],
        location: "Ryukyu Islands",
        image: "cowfish.jpg"
    },
    {
        name: "Nightmare",
        species: "Anglerfish",
        length: 5,
        diet: ["your soul"],
        location: "Deep Sea",
        image: "anglerfish.jpg"
    },
    {
        name: "Kismet",
        species: "Prairie Dog Fish",
        length: 12,
        diet: ["timothy hay", "mealworms", "sweet potatoes", "socks"],
        location: "Texas",
        image: "kismet.jpg"
    },
    {
        name: "Sparky",
        species: "Neon Tetra",
        length: 1,
        diet: ["fish flakes", "bloodworms", "sweet potatoes", "socks"],
        location: "Peru",
        image: "neontetra.jpg"
    },
    {
        name: "Aquaman",
        species: "Atlantean",
        length: 73,
        diet: ["fish and chips"],
        location: "Amnesty Bay",
        image: "aquaman.jpg"
    }
];

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = [];
    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish);
        }
    }
    return holyFish
}

export const soldierFish = () => {
    const soldierFish = [];
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0) {
            soldierFish.push(fish);
        }
    }
    return soldierFish
}

export const nonHolyFish = () => {
    const regularFish = [];
    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish);
        }
    }
    return regularFish
}

export const useFish = () => {
    return fishCollection.slice(); //slice() creates a copy of the array so you aren't exporting the actual array
}