// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {

    customerName = customerName.toUpperCase();

    return customerName;
}

function setBestCustomer() {

    window.bestCustomer;

    bestCustomer = "not bob";

    return bestCustomer;
}

function overwriteBestCustomer() {

    bestCustomer = "maybe bob";

    return bestCustomer;
    
}

function changeLeastFavoriteCustomer() {
    throw "Assignment to constant variable."
}
