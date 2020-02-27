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

    // const fishArray = [
    //     'betty',
    //     'goober',
    //     'seabiscuit',
    //     'frank',
    //     'flarp',
    //     'jerry',
    //     'nightmare',
    //     'kismet',
    //     'sparky'
    // ];

    // for (const fish of fishArray) {
    //         document.querySelector("#button--"+fish).addEventListener(
    //             "click",
    //             theClickEvent => {
    //                 const theDialog = document.querySelector("#details--"+fish)
    //                 theDialog.showModal()
    //             }
    //         )
    //     }

}

export default initializeDetailButtonEvents