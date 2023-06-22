import { addExpenses , expenses} from "./modules/expenseModule.js"
import { displayList} from "./modules/ulModule.js"

let expensesFormContainer = document.getElementById("expenses-form");
let expensesListContainer = document.getElementById("expenses-list");

fetch('./components/expenses-form.html').then((response) => response.text())
    .then((html) => {
        expensesFormContainer.innerHTML = html
    })

fetch('./components/expenses-list.html').then((response) => response.text())
    .then((html) => {
        expensesListContainer.innerHTML = html
    })

let form = document.getElementById("expenses-form")
form.addEventListener("submit", (event) => {
    try {
        event.preventDefault();

        let expenseNameInput = document.getElementById("expenseName")
        let expensePriceInput = document.getElementById("expensePrice")


        let expenseName = expenseNameInput.value
        let expensePrice = expensePriceInput.value

        if (expenseName && expensePrice) {
            addExpenses(expenseName, expensePrice)
            console.log("expenses", expenses)

            displayList()
        }
        document.getElementById("expenseName").value=" ";
        document.getElementById("expensePrice").value=" ";
        

     } catch (error) {
         alert(`App Error: ${error.message}`)
     }
})
