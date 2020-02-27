const tipCollection = [
    "Cycle your tank completely before adding any fish!",
    "Do a 20% water change each week.",
    "Test your water pH, nitrates, and nitrites often.",
    "Create a feeding schedule for your fish! Some fish need to eat a variety of foods thoughout the week to stay healthy, and others shouldn't be fed everyday or they will become overweight."
];

export const getTips = () => {
    return tipCollection.slice();
}