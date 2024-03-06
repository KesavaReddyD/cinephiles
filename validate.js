function validateForm() {
    var username = document.getElementById('uname').value;
    var password = document.getElementById('psw').value;
    var confirmPassword = document.getElementById('cpsw').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('tel').value;

    // Check username length
    if (username.length < 6) {
        alert('Username must be at least 6 characters long.');
        return false;
    }

    // Check password length and constraints
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long and contain at least one letter and one number.');
        return false;
    }

    // Check password and confirm password fields match
    if (password !== confirmPassword) {
        alert('Password and confirm password fields do not match.');
        return false;
    }

    // Check email format
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Email must be in the form "yourname@domain.com".');
        return false;
    }

    // Check mobile number format
    var mobileNumberRegex = /^[6-9]\d{9}$/;
    if (!mobileNumberRegex.test(mobileNumber)) {
        alert('Mobile number must be 10 digits long and start with a number from 6 to 9.');
        return false;
    }

    return true;
}