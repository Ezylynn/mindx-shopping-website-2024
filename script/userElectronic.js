const electronicsProducts = [
    {
      productName: "Smartphone Model A",
      price: 699.99,
      category: 'smartphone',
      imageUrl: "https://cdn.mediamart.vn/images/product/dien-thoai-samsung-galaxy-a35-5g-a356e-8128g-vang_5d59a6b1.jpg"
    },
    {
      productName: "Laptop Model B",
      price: 1199.99,
      category: 'laptop',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39CeRU0Aqa7UPkZkOdbnEWYza_hN0xViyag&s"
    },
    {
      productName: "Tablet Model C",
      price: 499.99,
      category: 'tablet',
      imageUrl: "https://www.mobilehub.co.ke/storage/2023/09/apple-ipad-10-2-2020-b-600x600-1-2.jpg"
    },
    {
      productName: "Headphones Model D",
      price: 199.99,
      category: 'headphones',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOvX-A0519kkbGld3YMzBOSsWXZeReqlEVcQ&s"
    },
    {
      productName: "Smartphone Model E",
      price: 799.99,
      category: 'smartphone',
      imageUrl: "https://cdn.tgdd.vn/Products/Images/42/320968/realme-note-50-black-thumb-600x600.jpg"
    },
    {
      productName: "Laptop Model F",
      price: 1399.99,
      category: 'laptop',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZmEnciLFs15oR4obtQLaY7zRZZk0FeDmqng&s"
    },
    {
      productName: "Tablet Model G",
      price: 599.99,
      category: 'tablet',
      imageUrl: "https://cdn.tgdd.vn/Products/Images/522/320989/tcl-tab-10l-gen-2-black-thumb-600x600.jpg"
    },
    {
      productName: "Headphones Model H",
      price: 249.99,
      category: 'headphones',
      imageUrl: "https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/S300863451_1?1705948616"
    },
    {
      productName: "Smartphone Model I",
      price: 899.99,
      category: 'smartphone',
      imageUrl: "https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-midnight-1-600x600.jpg"
    },
    {
      productName: "Laptop Model J",
      price: 1599.99,
      category: 'laptop',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF9L_HgEd-Mzi1MzoefobJYOARtnlyYLDlcw&s"
    }
  ];
  
  
    
  electronicsProducts.forEach((item)=>{
    
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
    
    
        if(id == "smartphone"){
            cards.forEach( (item) => {
               if(item.dataset.category != "smartphone"){
                    item.style.display = 'none'
               }
               else{
                item.style.display = 'block'
           }
            })
        }
    
    
        if(id == "tablet"){
            cards.forEach( (item) => {
               if(item.dataset.category != "tablet"){
                    item.style.display = 'none'
               }
               else{
                item.style.display = 'block'
           }    
            })
        }
    
    
        if(id == "laptop"){
            console.log('YES')
            cards.forEach( (item) => {
               if(item.dataset.category != "laptop"){
                    item.style.display = 'none'
               }
               else{
                item.style.display = 'block'
                }
            })
        }
    
        if(id == "headphones"){
            console.log('YES')
            cards.forEach( (item) => {
               if(item.dataset.category != "headphones"){
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
    