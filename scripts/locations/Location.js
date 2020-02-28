const Location = (location) => {
    return `
        <section class="location location--card">
            <div id="card--${location.locid}" class="card">
                <div class="card__face card__face--front">
                    <div>
                        <img class="location__image"
                    src="images/locations/${location.image}"
                    alt="${location.name}">
                    </div>
                    <div class="location__name">${location.name}</div>
                </div>
                <div class="card__face card__face--back">
                    <div class="location__country">${location.country}</div>
                    <div class="location__tips">${location.tips.join(",")}</div>
                </div>
            </div>
        </section
                `
}

export default Location