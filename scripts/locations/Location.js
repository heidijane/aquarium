const Location = (location) => {
    let locHTML = `
        <section class="location location--card">
            <div id="card--${location.locid}" class="card">

            <!--front of card-->
                <div class="card__face card__face--front">
                    <div class="card__spacing">
                        <div>
                            <img class="location__image"
                        src="images/locations/${location.image}"
                        alt="${location.name}">
                        </div>
                        <div class="location__name">${location.name}</div>
                    </div>
                </div>

                <!--back of card-->
                <div class="card__face card__face--back">
                    <div class="card__spacing">
                        <div class="location__country">${location.country}</div>
                        <div class="location__tips">
                            <ul>`;
                        for (let locationTip of location.tips) {
                            locHTML += `<li>${locationTip}</li>`;
                        }
                        
        locHTML += `                
                        
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section
                `;

        return locHTML;
        
}

export default Location