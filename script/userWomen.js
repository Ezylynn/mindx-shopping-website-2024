//database

// created own "database" with the products already in place
const womensClothingProducts = [
  {
    productName: "Floral Print Dress",
    price: 49.99,
    category: 'dress',
    imageUrl: "https://eu.sandro-paris.com/dw/image/v2/BCMW_PRD/on/demandware.static/-/Sites-master-catalog/default/dw5e7aadc3/images/hi-res/Sandro_SFPRO03593-D187_V_1.jpg?sw=650&sh=650"
  },
  {
    productName: "High-Waisted Jeans",
    price: 39.99,
    category: 'pants',
    imageUrl: "https://terranova.ph/cdn/shop/files/SAB0063080001S352_det_2_12050157.jpg?v=1705555490&width=1946"
  },
  {
    productName: "Leather Jacket",
    price: 89.99,
    imageUrl: "https://leatheriza.com/wp-content/uploads/2020/09/Brown-Women-Jacket.jpg"
  },
  {
    productName: "Casual T-Shirt",
    price: 19.99,
    category: 't-shirt',
    imageUrl: "https://salt.tikicdn.com/cache/550x550/ts/product/c3/89/00/393ec9de90704df66b399670dabc2b7b.jpg"
  },
  {
    productName: "Striped Sweater",
    price: 29.99,
    category: 'shirt',
    imageUrl: "https://contents.mediadecathlon.com/p2495717/d66564ca8a49e56c06b80e6343565204/p2495717.jpg?format=auto&quality=70&f=650x0"
  },
  {
    productName: "Summer Shorts",
    price: 24.99,
    category: 'pants',
    imageUrl: "https://pyxis.nymag.com/v1/imgs/82c/4f7/75056417ed3ddfec2093e5e7e3aa42df46-Agolde-high-rise-denim.rsquare.w600.jpg"
  },
  {
    productName: "Maxi Skirt",
    price: 34.99,
    category: 'dress',
    imageUrl: "https://ae01.alicdn.com/kf/S947f3aafd4f34747af19c711c0b6ca25E.jpg_640x640Q90.jpg_.webp"
  },
  {
    productName: "Denim Jacket",
    price: 59.99,
    imageUrl: "https://i5.walmartimages.com/seo/Vetinee-Women-s-Basic-3-4-Sleeves-Button-Down-Denim-Jackets-Pocketed-Stretchy-Jean-Jackets-Size-XL-Fit-Size-16-Size-18_277444e4-b97f-4bdb-a5a4-b9a6e4b370af.f20fdd3ac94f5de705723d2138e1c795.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
  },
  {
    productName: "Knit Cardigan",
    price: 44.99,
    category: 'shirt',
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUswVNeAE0c8pnz_dVJXi2pffza7pLiYRM1A&s"
  },
  {
    productName: "Sleeveless Blouse",
    price: 22.99,
    category: 'shirt',
    imageUrl: "https://i.ebayimg.com/images/g/1dkAAOSwJiRgmYQ5/s-l1200.webp"
  },
  {
    productName: "Pencil Skirt",
    price: 29.99,
    category: 'dress',
    imageUrl: "https://i5.walmartimages.com/asr/63b2d1bc-f9fa-48e0-b8e0-d7aa3894cf39.7bf5838061edd89586fbc3b155fad66c.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
  },
  {
    productName: "V-Neck Sweater",
    price: 34.99,
    category: 'shirt',
    imageUrl: "https://media.kohlsimg.com/is/image/kohls/4922640_Gray_Heather?wid=600&hei=600&op_sharpen=1"
  },
  {
    productName: "Button-Up Blouse",
    price: 26.99,
    category: 'shirt',
    imageUrl: "https://i5.walmartimages.com/seo/fvwitlyh-Long-Sleeve-White-Shirt-Women-Womens-Button-Down-Shirts-Short-Sleeve-Business-Collared-Work-Office-Formal-Button-Up-Blouse-Shirt_fd8f410a-da91-48fd-a53a-9f9943df5b5a.afcd132ee2fa7e778a7d84db24ecff49.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
  },
  {
    productName: "Cropped Pants",
    price: 39.99,
    category: 'pants',
    imageUrl: "https://freecountry.com/cdn/shop/files/14ALAS4931MEDIUMGREY_2311_SS-029.jpg?v=1711379196&width=860"
  },
  {
    productName: "A-Line Skirt",
    price: 32.99,
    category: 'dress',
    imageUrl: "https://s7.landsend.com/is/image/LandsEnd/430808_LEPP_FF_BLA"
  },
]


// create the product card for each item 
womensClothingProducts.forEach((item)=>{

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


    if(id == "dress"){
        console.log('YES')
        cards.forEach( (item) => {
           if(item.dataset.category != "dress"){
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
