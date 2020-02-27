const fishCollection = [
    {
        name: "Betty",
        species: "Longtooth Barracuda",
        length: "2 feet",
        diet: ["squid", "humans"],
        location: "Cumberland River",
        image: "betty.jpg"
    },
    {
        name: "Goober",
        species: "Clown Loach",
        length: "7 inches",
        diet: ["snails", "sinking pellets"],
        location: "Sumatra",
        image: "clownloach.jpg"
    },
    {
        name: "Seabiscuit",
        species: "Leafy Sea Dragon",
        length: "8 inches",
        diet: ["plankton"],
        location: "South Australia",
        image: "seadragon.jpg"
    },
    {
        name: "Frank",
        species: "Hammerhead Shark",
        length: "15 feet",
        diet: ["fish"],
        location: "Florida Keys",
        image: "hammerhead.jpg"
    },
    {
        name: "Flarp",
        species: "Blobfish",
        length: "11 inches",
        diet: ["???"],
        location: "Tasmania",
        image: "blobfish.jpg"
    },
    {
        name: "Jerry",
        species: "Longhorn Cowfish",
        length: "20 inches",
        diet: ["crustaceans", "small fish", "jellyfish"],
        location: "Ryukyu Islands",
        image: "cowfish.jpg"
    },
    {
        name: "Nightmare",
        species: "Anglerfish",
        length: "5 inches",
        diet: ["your soul"],
        location: "Deep Sea",
        image: "anglerfish.jpg"
    },
    {
        name: "Kismet",
        species: "Prairie Dog Fish",
        length: "11 inches",
        diet: ["timothy hay", "mealworms", "sweet potatoes", "socks"],
        location: "Texas",
        image: "kismet.jpg"
    },
    {
        name: "Sparky",
        species: "Neon Tetra",
        length: "3/4 inch",
        diet: ["fish flakes", "bloodworms", "sweet potatoes", "socks"],
        location: "Peru",
        image: "neontetra.jpg"
    },
    {
        name: "Aquaman",
        species: "Atlantean",
        length: "6 feet, 1 inch",
        diet: ["fish and chips"],
        location: "Amnesty Bay",
        image: "aquaman.jpg"
    }
];

export const useFish = () => {
    return fishCollection.slice(); //slice() creates a copy of the array so you aren't exporting the actual array
}