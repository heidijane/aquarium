/**
 *  Fish which renders individual fish objects as HTML
 */

const Fish = (fish) => {
    return `
        <section id="box--${fish.name}" class="fish">
                        <div>
                            <img class="fish__image"
                                src="images/${fish.image}"
                                alt="${fish.name} the ${fish.species}">
                        </div>
                        <div class="fish__name">${fish.name}</div>
                    </section>
            <dialog class="dialog--fish" id="details--${fish.name}">
                        <div class="dialog__fishName">${fish.name}</div>
                        <table>
                            <tr>
                                <td>Length</td>
                                <td>${fish.length} inches</td>
                            </tr>
                            <tr>
                                <td>Species</td>
                                <td>${fish.species}</td>
                            </tr>
                            <tr>
                                <td>Diet</td>
                                <td>${fish.diet.join(",")}</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td>${fish.location}</td>
                            </tr>
                        </table>           
                        <button class="button--close" id="close-${fish.name}">X</button>
                    </dialog>
    `
}

export default Fish