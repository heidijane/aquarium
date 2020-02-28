const cardFlip = () => {
    // Get a reference to all buttons that start with are divs with an ID starting with "card--"
    const allCards = document.querySelectorAll("div[id^='card--']")

    // Add an event listener to each one
    for (const card of allCards) {
        card.addEventListener(
            "click",
            theEvent => {
                let cardElement =  document.getElementById(card.id);
                cardElement.classList.toggle('is-flipped');
            }
        )
    }

}

export default cardFlip;