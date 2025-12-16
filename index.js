// Simple program to check password length

function checkPassword(password) {
    if (password.length >= 8) {
        return "Password is strong";
    } else {
        return "Password is too short";
    }
}

const userPassword = "mypassword";

const message = checkPassword(userPassword);

console.log(message);
