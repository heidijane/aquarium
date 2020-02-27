const Location = (location) => {
    return `
    <section class="location">
                    <div>
                        <img class="location__image"
                            src="images/locations/${location.image}"
                            alt="${location.name}">
                    </div>
                    <div class="location__name">${location.name}</div>
                    <div class="location__country">${location.country}</div>
                    <div class="location__tips">${location.tips.join(",")}</div>
                </section>
                `
}

export default Location