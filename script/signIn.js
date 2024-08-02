// fetch data base, included OR in case unable to get data 
var database = JSON.parse(localStorage.getItem('user-database')) || [];



function confirmUserCredentials(userEmail, userPass) {
    // database.find returning true if the parameter userEmail 
    // matches with one of the object email property
    return database.find(user => user.email === userEmail && user.password === userPass);
}



function logIn(userEmail) {
    // Update the user's login status to true
    database = database.map(user => {
        if (user.email === userEmail) {
            // return the whole user including the property change for isLoggedIn
            return { ...user, isLoggedIn: true };
        }
        return user;
    });

    // Update the database in localStorage
    localStorage.setItem('user-database', JSON.stringify(database));

    // Store the logged-in user's email in localStorage
    localStorage.setItem('loggedInUser', userEmail);
    alert('Login successful! Redirecting to homepage...');
    // Redirect to the homepage
    window.location.href = '../user_page/userHomePage.html'; // Replace 'homepage.html' with your actual homepage URL
}


// fetching user input from form 
var formInput = document.getElementById('user-sign-in');
formInput.addEventListener('submit', (event) => {
    event.preventDefault();
    let userEmail = document.getElementById('email').value;
    let userPass = document.getElementById('password').value;


    // check if user email and pass match, if TRUE log in 
    const user = confirmUserCredentials(userEmail, userPass);
    if (user) {
        logIn(userEmail);
    } else {
        alert('Your email or password is incorrect');
    }
});
