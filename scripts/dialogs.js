const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    const fishArray = [
        'betty',
        'goober',
        'seabiscuit'
    ];

    for (const fish of fishArray) {
            document.querySelector("#button--"+fish).addEventListener(
                "click",
                theClickEvent => {
                    const theDialog = document.querySelector("#details--"+fish)
                    theDialog.showModal()
                }
            )
        }
    
    // // Show Betty's details when the button is clicked
    // document.querySelector("#button--betty").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--betty")
    //         theDialog.showModal()
    //     }
    // )

    //  // Show Goober's details when the button is clicked
    //  document.querySelector("#button--goober").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--goober")
    //         theDialog.showModal()
    //     }
    // )

    // // Show Goober's details when the button is clicked
    // document.querySelector("#button--seabiscuit").addEventListener(
    //     "click",
    //     theClickEvent => {
    //         const theDialog = document.querySelector("#details--seabiscuit")
    //         theDialog.showModal()
    //     }
    // )

}

export default initializeDetailButtonEvents