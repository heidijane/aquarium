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


    // You will be writing code below this line

    const fishes = useFish();

    for (const fish of fishes) {
              document.querySelector("#button--"+fish.name).addEventListener(
                "click",
                theClickEvent => {
                    const theDialog = document.querySelector("#details--"+fish.name)
                    theDialog.showModal()
                }
            )
        }



}

export default initializeDetailButtonEvents