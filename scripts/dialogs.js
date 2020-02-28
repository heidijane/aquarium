import { useFish } from "./fish/FishDataProvider.js"

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

    // const fishes = useFish();

    // for (const fish of fishes) {
    //           document.querySelector("#button--"+fish.name).addEventListener(
    //             "click",
    //             theClickEvent => {
    //                 const theDialog = document.querySelector("#details--"+fish.name)
    //                 theDialog.showModal()
    //             }
    //         )
    //     }


    // Get a reference to all buttons that start with "button--"
    const allDetailButtons = document.querySelectorAll("button[id^='button--']")

    // Add an event listener to each one
    for (const btn of allDetailButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
                const theDialog = document.querySelector(dialogSiblingSelector)
                theDialog.showModal()
            }
        )
    }

}

export default initializeDetailButtonEvents