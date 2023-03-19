// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {

    customerName = customerName.toUpperCase();

    return customerName;
}

function setBestCustomer() {

    window.bestCustomer;

    bestCustomer = "not bob";
console.log(bestCustomer)
    return bestCustomer;
}

function overwriteBestCustomer() {
console.log(bestCustomer)
    bestCustomer = "maybe bob";

    return bestCustomer;

}

function changeLeastFavoriteCustomer() {
    throw "Assignment to constant variable."
}
