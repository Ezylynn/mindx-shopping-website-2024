var database = JSON.parse(localStorage.getItem('user-database')) || [];


const selectUser = () => {
    const user = database.find(user => user.isLoggedIn === true);
    return user;
};


// calcualting subtotal
function priceTimesQuantity(quantity, price){
    return Number(quantity) *  Number(price)

}

// selectUser is run first to find the correct user that is logging in
var user = selectUser()
// selecting the product objects stored inside itemBrought array
user.itemBrought.forEach(element => {
    let parentContainer = document.querySelector('.cart-body')
    let tableRow = document.createElement('tr')

    let tableItem = document.createElement('td')
    tableItem.classList.add('item')
    let itemDesc = document.createElement('div')
    itemDesc.classList.add('item-desc')
    let productImage = document.createElement('img')
    let button = document.createElement('button')
    button.classList.add('remove')
    button.setAttribute('data-title', element.title)
    let productName = document.createElement('p')
    let productPrice = document.createElement('p')

    button.addEventListener('click', (event) => {
        let clickedButton = event.target
        let itemTitle = clickedButton.dataset.title
        let subParentContainer = clickedButton.parentElement
        let parentContainer = subParentContainer.parentElement
        let mainContainer = parentContainer.parentElement
        itemRemove(itemTitle, mainContainer)
        
        
    })



    productName.innerText = element.title
    productPrice.innerText = element.price
    productImage.setAttribute('src', element.image)
    button.innerText = 'Remove'

    itemDesc.appendChild(productName)
    itemDesc.appendChild(productPrice)
    itemDesc.appendChild(button)

    tableItem.appendChild(productImage)
    tableItem.appendChild(itemDesc)
    


    let tableQuantity = document.createElement('td')
    let quantityDiv  = document.createElement('div')

    let productQuantity = document.createElement('p')
    let quantityAdd  = document.createElement('button')
    let quantityMinus  = document.createElement('button')

    productQuantity.classList.add('quantity')
    quantityDiv.setAttribute('data-price', element.price)
    quantityDiv.classList.add('item-num')
    quantityAdd.classList.add('plus')
    quantityMinus.classList.add('minus')

    productQuantity.innerText = element.quantity
    quantityMinus.innerText = '-'
    quantityAdd.innerText = '+'

    quantityAdd.addEventListener('click', (event)=> {
        let clickedButton = event.target
        let subParentContainer = clickedButton.parentElement
        let parentContainer = subParentContainer.parentElement
        let mainContainer = parentContainer.parentElement
        addItem(subParentContainer, parentContainer, mainContainer)
    }
    
    )

    quantityMinus.addEventListener('click', (event)=> {
        let clickedButton = event.target
        let subParentContainer = clickedButton.parentElement
        let parentContainer = subParentContainer.parentElement
        let mainContainer = parentContainer.parentElement
        minusItem(subParentContainer, parentContainer, mainContainer)
    }
    
    )

    quantityDiv.appendChild(quantityAdd)
    quantityDiv.appendChild(productQuantity)
    quantityDiv.appendChild(quantityMinus)
    tableQuantity.appendChild(quantityDiv)


    let tableTotal = document.createElement('td')
    let subTotal = document.createElement('p')
    subTotal.classList.add('sub-total')
    subTotal.setAttribute('data-id', element.title)
    let priceWithoutDollarSign = element.price.replace('$', '');

    subTotal.innerText = `$${priceTimesQuantity(element.quantity, priceWithoutDollarSign)}`

 
    
    tableTotal.appendChild(subTotal)
    tableRow.appendChild(tableItem)
    tableRow.appendChild(tableQuantity)
    tableRow.appendChild(tableTotal)
    parentContainer.appendChild(tableRow)
    
});

// rounding function 
function roundToTwo(num) {
    return Number(num.toFixed(2))
}



// adding subttoal 
function addingSubTotal(){
    let BeforeTax = document.getElementById('subtotal')
    let totalSubTotal = document.querySelectorAll('.sub-total')
    var total = 0

    totalSubTotal.forEach(price =>{
        
        let num = price.innerText.replace('$',' ')
        total = Number(num) + total
       
    })
    totalAfterTax(total)
    BeforeTax.innerText = `$${roundToTwo(total)}`





}



function totalAfterTax(totalBeforeTax){
    let taxRate = document.getElementById('tax')
    let AfterTax = document.getElementById('total')


    taxRate.innerText = `$${roundToTwo( totalBeforeTax * 0.15)}`


    let tax = totalBeforeTax * 0.15
    AfterTax.innerText = `$${roundToTwo(tax + totalBeforeTax)}`



}


addingSubTotal()


function itemRemove(name, item){
    let parentContainer = document.querySelector('.cart-body')
    parentContainer.removeChild(item)
    let userSelected = selectUser()
    let updatedUser = userSelected
    updatedUser.itemBrought = userSelected.itemBrought.filter(product => product.title != name)

    database.map(userCopy => {
        if(userCopy.isLoggedIn === true){
         
            userCopy = updatedUser
            console.log(userCopy)
            localStorage.setItem('user-database', JSON.stringify(database));
            console.log(JSON.parse(localStorage.getItem('user-database')) )
            addingSubTotal()
        }

        
    })
 



}


function addItem(subParentContainer,parentContainer, mainContainer){
    let quantityNo = subParentContainer.querySelector('.quantity')
    let subTotal = mainContainer.querySelector(`[data-id]`)
    console.log(subParentContainer.dataset.price)

    number = quantityNo.innerText 
    quantityNo.innerText = Number(number) + 1

    price = subParentContainer.dataset.price.replace('$', '')
    
    subTotal.innerText = `$${roundToTwo( priceTimesQuantity(quantityNo.innerText, price))}`
    let name = subTotal.dataset.id


    let userSelected = selectUser();
    let updatedUser;
    
    if (Array.isArray(userSelected.itemBrought)) {
      updatedUser = userSelected.itemBrought.map(product => {
        if (product && product.title === name) {
          product.quantity = Number(quantityNo.innerText);
        }
        return product; // Return the product to keep it in the new array
      });
    } else {
      console.error('itemBrought is not defined or not an array');
      updatedUser = []; // Set updatedUser to an empty array in case of error
    }
    

    database.map(userCopy => {
        if(userCopy.isLoggedIn === true){
        
            userCopy = updatedUser
            console.log(userCopy)
            localStorage.setItem('user-database', JSON.stringify(database));
            console.log(JSON.parse(localStorage.getItem('user-database')) )

            addingSubTotal()
            
        }})


}



function minusItem(subParentContainer, parentContainer, mainContainer){
    let quantityNo = subParentContainer.querySelector('.quantity')
    let subTotal = mainContainer.querySelector(`[data-id]`)
    let name = subTotal.dataset.id
    console.log(subParentContainer.dataset.price)

    number = quantityNo.innerText 
    quantityNo.innerText = Number(number) - 1

    if(Number(quantityNo.innerText) == 0){
        itemRemove(name ,mainContainer)
    }



    price = subParentContainer.dataset.price.replace('$', '')
    
    subTotal.innerText = `$${roundToTwo( priceTimesQuantity(quantityNo.innerText, price))}`



    let userSelected = selectUser();
    let updatedUser;
    
    if (Array.isArray(userSelected.itemBrought)) {
      updatedUser = userSelected.itemBrought.map(product => {
        if (product && product.title === name) {
          product.quantity = Number(quantityNo.innerText);
        }
        return product; // Return the product to keep it in the new array
      });
    } else {
      console.error('itemBrought is not defined or not an array');
      updatedUser = []; // Set updatedUser to an empty array in case of error
    }
    
    


    database.map(userCopy => {
        if(userCopy.isLoggedIn === true){
        
            userCopy.itemBrought = updatedUser
            console.log(userCopy)
            localStorage.setItem('user-database', JSON.stringify(database));
            console.log(JSON.parse(localStorage.getItem('user-database')) )

            addingSubTotal()
            
        }})


}


