const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#Cash-given")
const checkBtn = document.querySelector("#checkout-btn")
const errorMsg = document.querySelector("#error")

const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

checkBtn.addEventListener("click", () => {
    if (billAmount.value > 0) {
        handleDisplay();
        if (cashGiven.value >= billAmount.value) {
            const amountReturn = cashGiven.value - billAmount.value;
            changesReturn(amountReturn);
        }
        else {
            errorHandler("Do you wanna wash the plates?")
        }
    }
    else {
        errorHandler("Please enter valid amount")
    }
})

function errorHandler(message) {
    errorMsg.style.display = "block"
    errorMsg.innerText = message
}

function handleDisplay() {
    errorMsg.style.display = "none"
}

function changesReturn(amountReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOFNotes = Math.trunc(amountReturn / availableNotes[i]);

        amountReturn = amountReturn %= availableNotes[i]

        noOfNotes[i].innerText = numberOFNotes;
    }
}
