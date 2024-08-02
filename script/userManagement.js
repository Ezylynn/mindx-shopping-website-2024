async function fetchData (){
    database = JSON.parse(localStorage.getItem('user-database')) || [];

}

const isUserLoggedIn = () => {
  fetchData()
  // check if there is an user with isLoggedin with .find()
  // if there is an user, return TRUE
  // if not return FALSE
  const user = database.find(user => user.isLoggedIn === true);
  return user;
};

const accessShoppingCart = () => {

  if (!isUserLoggedIn()) {
    alert('You need to log in to access the shopping cart');
    window.location.href = '../user_page/signIn.html'; // Redirect to login page
    return;
  }
  
  // Code to display the shopping cart
  window.location.href = '../user_page/userCart.html'; // Redirect to login page
};

const accessUserPage = () => {
    if (!isUserLoggedIn()) {
      alert('You need to log in to access the user page');
      window.location.href = '../user_page/signIn.html'; // Redirect to login page
      return;
    }
    // Code to display the shopping cart
    window.location.href = '../user_page/userInfo.html'; 
  };


//  getting the user logo and cart element
var checkUserPage= document.getElementById('user')
var checkCart = document.getElementById('cart')


// assigning add event listener, call accessShoppingCart() if clikced
checkCart.addEventListener('click', ()=>{
    accessShoppingCart()
})

checkUserPage.addEventListener('click', ()=>{
    accessUserPage()
})