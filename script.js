let country = document.getElementById('country')
let companyName = document.getElementById('companyName')
let registrationType = document.getElementById('registrationType')
let registrationNumber = document.getElementById('registrationNumber')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let error = document.querySelector('.error')

let registrationForm = document.getElementById('registrationForm')

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (country.value == "" || country.value == null) {
        error.append(" *Please Enter Country name")
    }
    if (companyName.value == "" || companyName.value == null) {
        error.append(" *Please Enter Company Name")
    }
    if (registrationType.value == "" || registrationType.value == null) {
        error.style.display = "block"
        error.append(" *Please Enter Registration Type")
    }
    if (registrationNumber.value == "" || registrationNumber.value == null) {
        error.style.display = "block"
        error.append(" *Please Enter Registration Number ")
    }
    if (fname.value == "" || fname.value == null) {
        error.style.display = "block"
        error.append(" *Please Enter First name")
    }
    if (lname.value == "" || lname.value == null) {
        error.style.display = "block"
        error.append(" *Please Enter Last name")
    }
    if (email.value == "" || email.value == null) {
        error.style.display = "block"
        error.append(" *Please Enter Email id")
    }
    if (phone.value == "" || phone.value == null) {
        error.style.display = "block"
        error.append(" *Please Enter Phone Number")
    }

})

