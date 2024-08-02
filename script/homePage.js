
const fetchClothingItems = async () => {
    // initalizing variable before fetch sequence
    var products;
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        products = await response.json();
        await createCard(products)
        

        

    } 
    catch (error){
        // catch(error) will be call if unable to fetch 
        // data from API server
        console.error('Error fetching clothing items:', error);
    }
};
fetchClothingItems();



// creating product card using DOM 
const createCard = async (items)=>{
    let products;
    products = await items
    for (let item in products){
    let card = document.createElement("div")
    card.classList.add('card')

    card.setAttribute('data-category', products[item].category)

    let img = document.createElement("img")
    img.setAttribute("src", products[item].image )
  
    let cardTitle = document.createElement("p")
    cardTitle.classList.add("title")
    cardTitle.innerText = products[item].title
    
    if (cardTitle.innerText.length > 20) {
        cardTitle.textContent = cardTitle.textContent.substring(0, 20) + '...';
        card.setAttribute('data-title',products[item].title )
      }
    
    else{
        card.setAttribute('data-title',products[item].title )
    }

    


   
  
    let cardPrice = document.createElement("p")
    cardPrice.classList.add("price")
    cardPrice.innerText = `${products[item].price}$` 
  
    let button = document.createElement("button")
    button.innerText = 'BUY'
    button.classList = 'buy'

    button.addEventListener('click', (event) => {
        var clickedButton = event.target
        var parentContainer = clickedButton.parentElement
        var mainContainer = parentContainer.parentElement
        //
        buyProduct(parentContainer, mainContainer)
    })

    let itemUI = document.createElement("div")
    itemUI.classList = 'item-ui'

    let storeBody = document.getElementById("store-body")
    
    storeBody.append(card)
    card.append(img)
    card.append(itemUI)
    itemUI.append(cardTitle)
    itemUI.append(cardPrice)
    itemUI.append(button)

    
    }
    

}










// searchbar navigation 
const storeNav = document.getElementById('store-nav')
const storeNavDiv = storeNav.querySelector('div')
const button = document.createElement('button')
button.id = 'button-search'
storeNavDiv.append(button)

const cheese = document.createElement('i')
cheese.classList = 'bx bxs-cheese'
button.appendChild(cheese)

function buttonClick(){

    var searchInput = document.getElementById("search-bar")
    var inputValue = searchInput.value.toUpperCase()
    var cards = document.querySelectorAll('.card')



    cards.forEach(function(name,index){

        var dataTitle = name.dataset.title || ""; 

        if (dataTitle.toUpperCase().includes(inputValue)){
            cards[index].style.display = 'block'
        }

    
 
        else{
            cards[index].style.display = 'none';

        }

    })   
}

button.addEventListener('click',buttonClick)


// store menu navigation 
const categoryNode = storeNavDiv.querySelectorAll('.menu-button')
categoryNode.forEach(button =>{
    button.addEventListener('click', (event)=>{
        const targetCateory = event.target
        console.log(targetCateory.id)
        categorySort(targetCateory.id)
    })
})


categorySort = (id)=>{
    var cards = document.querySelectorAll('.card')

    if(id == 'all'){
        cards.forEach( (item) => {
           item.style.display = 'block'
        })
    }


    if(id == "men's clothing"){
        cards.forEach( (item) => {
           if(item.dataset.category != "men's clothing"){
                item.style.display = 'none'
           }
           else{
            item.style.display = 'block'
       }
        })
    }


    if(id == "women's clothing"){
        cards.forEach( (item) => {
           if(item.dataset.category != "women's clothing"){
                item.style.display = 'none'
           }
           else{
            item.style.display = 'block'
       }    
        })
    }


    if(id == "electronics"){
        console.log('YES')
        cards.forEach( (item) => {
           if(item.dataset.category != "electronics"){
                item.style.display = 'none'
           }
           else{
            item.style.display = 'block'
            }
        })
    }

    if(id == "jewelery"){
        console.log('YES')
        cards.forEach( (item) => {
           if(item.dataset.category != "jewelery"){
                item.style.display = 'none'
           }
           else{
                item.style.display = 'block'
           }
        })
    }
}






// supposed to be in user management but i put it here to cut corners lol

const isUserLoggedInCopy = () => {
    fetchData()
    const user = database.find(user => user.isLoggedIn === true);
    return user;
  };


// wanted it to be sotred in userManagement.js but the operations 
// of fetching was async and it was messy handling so I just did in the same page

const buyProduct = (parentContainer, mainContainer) => {
        if (!isUserLoggedInCopy()) {
          alert('You need to log in to buy a product');
          window.location.href = '../user_page/signIn.html';
        }

        else{
            let database = JSON.parse(localStorage.getItem('user-database')) || [];
            database = database.map(user => {
                if (user.isLoggedIn === true) {
                    // check if theres any same instances already stored inside itemBrought
                    // if true then it will just incremement that product quantity
                    // if false then will create a new object of that product 
                    let checkProduct = user.itemBrought.find(user => user.title == mainContainer.dataset.title)
                    if (checkProduct){
                        user.itemBrought.map(product =>{
                            if (product.title === mainContainer.dataset.title){
                                product.quantity = product.quantity + 1
                                localStorage.setItem('user-database', JSON.stringify(database));
                                console.log(JSON.parse(localStorage.getItem('user-database')) )
                                
                    
                            }
                        })
                    }

                    else{
                        let data ={
                            title: mainContainer.dataset.title,
                            image: mainContainer.querySelector('img').src,
                            price: parentContainer.querySelector('.price').innerText,
                            quantity: 1
    
                       }
    
                            user.itemBrought.push(data)
                            localStorage.setItem('user-database', JSON.stringify(database));
    
                    }


                
            }})
        }


      };


                // {title: 'test',
                // price: 'test$',
                // quantity: '0'
                // }