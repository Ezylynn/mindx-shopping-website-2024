let database = JSON.parse(localStorage.getItem('user-database')) || [];


const form = document.getElementById('user-sign-up')

// check if there's already an existing email 
const hasMatch = (userEmail) =>{
    var getDataBase = JSON.parse(localStorage.getItem('user-database'))
    console.log(getDataBase)

    return getDataBase.some(user => user.email === userEmail);
}

//storing data inside localstorage 

const storeData = (userName, userLastName, userEmail,  userPass, userBirth )=>{

    
    if (database.length == 0){
        data = 
        {
            name: userName,
            lastName: userLastName,
            email: userEmail,
            password: userPass,
            birthday: userBirth,
            isLoggedIn: false,
            itemBrought: [
                // {title: 'test',
                // price: 'test$',
                // quantity: '0'
                // }
            ]
    
        } 
    
        database.push(data)
        
        
    
        localStorage.setItem('user-database', JSON.stringify(database))
        alert("Account made")
        window.location.href = '../user_page/signIn.html'; 


    }

    else{   

            console.log(userEmail)
            if (hasMatch(userEmail)){
                alert("An account with a similar email has already been created")
            }
            else{
    
                let data = 
                {
                    name: userName,
                    lastName: userLastName,
                    email: userEmail,
                    password: userPass,
                    birthday: userBirth,
                    isLoggedIn: false,
                    itemBrought: [
                        // {title: 'test',
                        // price: 'test$',
                        // quantity: '0'
                        // }
                    ]
            
                } 

                database = JSON.parse(localStorage.getItem('user-database'))
                console.log(database)
                database.push(data)
                localStorage.setItem('user-database', JSON.stringify(database)) 
                alert("Account made")
                window.location.href = '../user_page/signIn.html'; 


 
            }
    
        
            }

    }


// check for if both password inputted are the same 
const checkPass = (cfPass,pass, userName, userLastName, userEmail,  userPass, userBirth)=>{

  if(String(cfPass)==String(pass)){
    storeData(userName, userLastName, userEmail,  userPass, userBirth)
  }

  else{
    alert("Both of your password aren't similar")


  }

}



// fetching user inputs from form 

form.addEventListener('submit', (event) =>{
    event.preventDefault()
    let userName = document.getElementById('name').value
    let userLastName = document.getElementById('last-name').value
    let userEmail = document.getElementById('email').value
    let userPass = document.getElementById('password').value
    let cfPass = document.getElementById('cf-password').value
    let userBirth = document.getElementById('date').value
    let oldEnough = userBirth.split('-')[0];
    let today = new Date()


    if (Number(today.getFullYear() - oldEnough) >= 16){
      checkPass(cfPass,userPass, userName, userLastName, userEmail,  userPass, userBirth)
        

    }
    else{

      alert('Not old enough, must be 16 years old or older')
    }

}

)

