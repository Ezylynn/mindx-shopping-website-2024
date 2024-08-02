
function fetchData (){
    var database = JSON.parse(localStorage.getItem('user-database')) || [];
    database = database.map(user => {
        if (user.isLoggedIn === true) {
            
            var userFirstName = document.getElementById('first-name')
            var userLastName = document.getElementById('last-name')
            var userBirthDate = document.getElementById('birth-date')
            var userEmail = document.getElementById('email')
            var userPass = document.getElementById('pass')
            
            userFirstName.value = user.name
            userLastName.value = user.lastName
            userBirthDate.value = user.birthday
            userEmail.value = user.email
            userPass.value = user.password
        }

})
} 



const signOut = document.getElementById('sign-out-user')
const remove = document.getElementById('delete-user')

signOut.addEventListener('click', ()=>{
    var confirmation = confirm('Do you want to sign out?');
    if (confirmation){
        var database = JSON.parse(localStorage.getItem('user-database')) || [];
        database = database.map(user => {
        if (user.isLoggedIn === true) {
            // check if any user object proerty has isLoggedIn === true
            // will rever it back to false if so 
            user.isLoggedIn = false

            // update local storage 
            localStorage.setItem('user-database', JSON.stringify(database));
            console.log(JSON.parse(localStorage.getItem('user-database')))
            alert('Logging out...')
            window.location.href = '../user_page/signIn.html';
        }})

    }


})

remove.addEventListener('click', ()=>{
    var confirmation = confirm(`Do you want to delete your account? You cannot get your account back if deleted `);
    if (confirmation){
        var database = JSON.parse(localStorage.getItem('user-database')) || [];

        // remove the user object that has isLoggedIn true entirely from database
        database = database.filter(user => user.isLoggedIn !== true);

        //update database
        localStorage.setItem('user-database', JSON.stringify(database));
        console.log(JSON.parse(localStorage.getItem('user-database')))
        alert('User deleted. Now returning to sign in page...')
        window.location.href = '../user_page/signIn.html';
    }


})

fetchData()





