const loanForm = document.querySelector("#loan-form");

const results = document.querySelector("#results")
const loading = document.querySelector("#loading")

loanForm.addEventListener("submit", CalculateResults)

function CalculateResults(e) {
    // console.log("Calculating...")

    const amount = document.getElementById("amount")
    const interest = document.getElementById("interest")
    const years = document.getElementById("years")


    const monthlyPayment = document.getElementById("monthly-payment")
    const totalPayment = document.getElementById("total-payment")
    const totalInterest = document.getElementById("total-interest")

    const principal = parseFloat(amount.value)
    console.log("principal: " ,principal)
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    console.log("calculatedInterest: " ,calculatedInterest)
    const calculatedPayments = parseFloat(years.value) * 12
    console.log("calculatedPayments: " ,calculatedPayments)

    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    console.log(x)
    const monthly = (principal*x*calculatedInterest)/(x-1)
    console.log(monthly)

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
        results.style.display = "none "
        loading.style.display = "block"

        setTimeout(showResults, 2000)

    } else {
        showError("Please check your Numbers")
    }
    e.preventDefault()
}

function showError(error) {
    const errorDiv = document.createElement('div')

    const card = document.querySelector(".card")
    const heading  = document.querySelector(".heading")

    errorDiv.className = "alert alert-danger";

    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading)

    setTimeout(clearAlert, 3000);

}

function clearAlert() {
    document.querySelector(".alert").remove()
}

function showResults() {
    loading.style.display = "none"
    results.style.display = "block"
}