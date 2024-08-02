const mensClothingProducts = [
    {
      productName: "Classic T-Shirt",
      price: 19.99,
      category: 't-shirt',
      imageUrl: "https://contents.mediadecathlon.com/p2301349/83b14838db03f875377e5f2efeb3e700/p2301349.jpg?format=auto&quality=70&f=650x0"
    },
    {
      productName: "Slim Fit Jeans",
      price: 49.99,
      category: 'pants',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnA93-14g5_m_A2WBsgv0azc9FoDp9wvMzw&s"
    },
    {
      productName: "Leather Jacket",
      price: 99.99,
      category: 'jacket',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Ab2nbMrOluu89VQBKntZ8J8SrRzjY0rZzg&s"
    },
    {
      productName: "Casual Shorts",
      price: 29.99,
      category: 'shorts',
      imageUrl: "https://i5.walmartimages.com/seo/Khaki-Solid-Pocket-Casual-Straight-Leg-Men-Clothing-Men-Shorts_5884d5e8-123f-4ac4-9556-3f2fc9c7e649.dd45e299e63e8ec0ff0abf871d42e9ce.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    },
    {
      productName: "Denim Jacket",
      price: 59.99,
      category: 'jacket',
      imageUrl: "https://images-cdn.ubuy.co.in/65380ba9e86ef865334fcb14-men-denim-jacket-streetwear-hip-hop.jpg"
    },
    {
      productName: "Sweatpants",
      price: 39.99,
      category: 'pants',
      imageUrl: "https://eg.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/666704/1.jpg?1061"
    },
    {
      productName: "Button-Up Shirt",
      price: 34.99,
      category: 'shirt',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MJ9DP8BHQUMTWvaR-xp8za9znt2kd5cKoA&s"
    },
    {
      productName: "Polo Shirt",
      price: 24.99,
      category: 'shirt',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUdGI87o7udLLY1BfHU37Y7twi27n_glCUA&s"
    },
    {
      productName: "Chino Pants",
      price: 44.99,
      category: 'pants',
      imageUrl: "https://static.fursac.com/data/chino-trousers-men-chinos-beige-p3vkia-vp14-06-pl4629306.1707305181.jpg"
    },
    {
      productName: "Hoodie",
      price: 49.99,
      category: 'jacket',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZa6CeNn2OA6ByqtCqEqRL8_d9YXbPP_siDg&s"
    },
    {
      productName: "Bomber Jacket",
      price: 79.99,
      category: 'jacket',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJihY_QXnLOSwykFs-_dqAvyZk0EWUYYt0A&s"
    },
    {
      productName: "Track Jacket",
      price: 54.99,
      category: 'jacket',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZHl96UopC4qTJlf2Uj6r6TLGKB9YKHTe7w&s"
    },
    {
      productName: "Cargo Pants",
      price: 59.99,
      category: 'pants',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FPCTs5jb45u--Q2EJ-4d442jxODQ66kHdw&s"
    },
    {
      productName: "Graphic T-Shirt",
      price: 22.99,
      category: 't-shirt',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzt88ud3oLDI_HnE44g1HZRx5gBpI2LgTGjQ&s"
    },
    {
      productName: "V-Neck Sweater",
      price: 39.99,
      category: 'shirt',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZrwGCyMVj-Te_LsRnA1xCq_wsCCO6MBcWPA&s"
    },
  ];
  
  
mensClothingProducts.forEach((item)=>{
  
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
  
  
      if(id == "shirt"){
          cards.forEach( (item) => {
             if(item.dataset.category != "shirt"){
                  item.style.display = 'none'
             }
             else{
              item.style.display = 'block'
         }
          })
      }
  
  
      if(id == "t-shirt"){
          cards.forEach( (item) => {
             if(item.dataset.category != "t-shirt"){
                  item.style.display = 'none'
             }
             else{
              item.style.display = 'block'
         }    
          })
      }
  
  
      if(id == "pants"){
          console.log('YES')
          cards.forEach( (item) => {
             if(item.dataset.category != "pants"){
                  item.style.display = 'none'
             }
             else{
              item.style.display = 'block'
              }
          })
      }
  
      if(id == "jacket"){
          console.log('YES')
          cards.forEach( (item) => {
             if(item.dataset.category != "jacket"){
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
  