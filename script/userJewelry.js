const jewelryProducts = [
  {
    productName: "Gold Necklace",
    price: 149.99,
    category: 'necklace',
    imageUrl: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw9d504020/images/hi-res/5115192GGAGAP1_2.jpg?sw=640&sh=640"
  },
  {
    productName: "Diamond Ring",
    price: 799.99,
    category: 'ring',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpcKipow72aR5-WfcqpxK39YIQluAoerZHZw&s"
  },
  {
    productName: "Silver Bracelet",
    price: 59.99,
    category: 'bracelet',
    imageUrl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/bangle-bracelet-armlet/j/f/6/free-9-na-trendy-sterling-silver-stone-studded-bracelet-for-original-imagmhgzqpwhezdr.jpeg?q=90&crop=false"
  },
  {
    productName: "Pearl Earrings",
    price: 99.99,
    category: 'earrings',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgGvq1gTm8xuaqnuJI7bNGnNCc8Hq_xwWJQ&s"
  },
  {
    productName: "Emerald Necklace",
    price: 199.99,
    category: 'necklace',
    imageUrl: "https://beauvince.com/cdn/shop/products/N582-4_800x.jpg?v=1668794086"
  },
  {
    productName: "Gold Ring",
    price: 129.99,
    category: 'ring',
    imageUrl: "https://shop.fncjewelry.com/cdn/shop/products/1_28090cc1-ccd8-47c5-94bf-d0e6651c2285.jpg?v=1623140337"
  },
  {
    productName: "Beaded Bracelet",
    price: 39.99,
    category: 'bracelet',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQMfnWm-B0uCzY1oBN7Y9peagUkRoujKIzQ&s"
  },
  {
    productName: "Hoop Earrings",
    price: 49.99,
    category: 'earrings',
    imageUrl: "https://mettleandbloom.com/cdn/shop/files/demurehoopearring_grande.jpg?v=1714672586"
  },
  {
    productName: "Sapphire Necklace",
    price: 299.99,
    category: 'necklace',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrS7NOgtFNhZISnxU2o5Xn09XtTNCUyVtW9w&s"
  },
  {
    productName: "Platinum Ring",
    price: 399.99,
    category: 'ring',
    imageUrl: "https://www.london-victorian-ring.com/cdn/shop/products/5020wrpl-6mm-platinum-bevelled-edge-wedding-band-159721x4-600h-650_600x.jpg?v=1599477302"
  }
];

  
jewelryProducts.forEach((item)=>{
  
    let card = document.createElement("div")
    card.classList.add('card')
    card.setAttribute('data-category', item.category)
  
    let img = document.createElement("img")
    img.setAttribute("src", item.imageUrl )
  
    let cardTitle = document.createElement("p")
    cardTitle.classList.add("title")
    cardTitle.innerText = item.productName
  
    let cardPrice = document.createElement("p")
    cardPrice.classList.add("price")
    cardPrice.innerText = `${item.price}$` 
  
    let button = document.createElement("button")
    button.innerText = 'BUY'
    button.classList = 'buy'
  
    button.addEventListener('click', (event)=>{
      var clickedButton = event.target
      var parentContainer = clickedButton.parentElement
      var mainContainer = parentContainer.parentElement
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
  )
  
  
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
      var productNamesNode = document.querySelectorAll('.title');
  
      productNamesNode.forEach(function(name,index){
          
  
          if (name.textContent.toUpperCase().includes(inputValue)){
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
  
  categorySort = (id)=>{
      var cards = document.querySelectorAll('.card')
  
      if(id == 'all'){
          cards.forEach( (item) => {
             item.style.display = 'block'
          })
      }
  
  
      if(id == "ring"){
          cards.forEach( (item) => {
             if(item.dataset.category != "ring"){
                  item.style.display = 'none'
             }
             else{
              item.style.display = 'block'
         }
          })
      }
  
  
      if(id == "bracelet"){
          cards.forEach( (item) => {
             if(item.dataset.category != "bracelet"){
                  item.style.display = 'none'
             }
             else{
              item.style.display = 'block'
         }    
          })
      }
  
  
      if(id == "necklace"){
          console.log('YES')
          cards.forEach( (item) => {
             if(item.dataset.category != "necklace"){
                  item.style.display = 'none'
             }
             else{
              item.style.display = 'block'
              }
          })
      }
  
      if(id == "earrings"){
          console.log('YES')
          cards.forEach( (item) => {
             if(item.dataset.category != "earrings"){
                  item.style.display = 'none'
             }
             else{
                  item.style.display = 'block'
             }
          })
      }
  }
  
  
  categoryNode.forEach(button =>{
      button.addEventListener('click', (event)=>{
          const targetCateory = event.target
          console.log(targetCateory.id)
          categorySort(targetCateory.id)
      })
  })
    
  
  
  
  // supposed to be in user management but i put it here to cut corners lol
  
  const isUserLoggedInCopy = () => {
    fetchData()
    const user = database.find(user => user.isLoggedIn === true);
    return user;
  };
  
  
  
  const buyProduct = (parentContainer, mainContainer) => {
        if (!isUserLoggedInCopy()) {
          alert('You need to log in to buy a product');
          window.location.href = '../user_page/signIn.html';
        }
  
        else{
            let database = JSON.parse(localStorage.getItem('user-database')) || [];
            database = database.map(user => {
                if (user.isLoggedIn === true) {
                    let checkProduct = user.itemBrought.find(user => user.title == parentContainer.querySelector('.title').innerText)
                    if (checkProduct){
                        user.itemBrought.map(product =>{
                            if (product.title === parentContainer.querySelector('.title').innerText){
                                product.quantity = product.quantity + 1
                                localStorage.setItem('user-database', JSON.stringify(database));
                                console.log(JSON.parse(localStorage.getItem('user-database')) )
                                
                    
                            }
                        })
                    }
  
                    else{
                        let data ={
                            title: parentContainer.querySelector('.title').innerText,
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
  