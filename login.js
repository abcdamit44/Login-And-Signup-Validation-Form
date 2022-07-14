let loginForm = document.getElementById('loginForm')
let username = document.getElementById('username')
let password = document.getElementById('password')
let error = document.querySelector('.error')


loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // alert("hii")
    if (username.value == "" || username.value == null) {
        // alert("Please Enter Username/Email")
        error.append(" *Please Enter CUsername/Email")
    }
    if (password.value == "" || password.value == null) {
        // alert("Please Enter Password")
        error.append(" *Please Enter Password")
    }
    console.log(username.value);
    console.log(password.value);

})