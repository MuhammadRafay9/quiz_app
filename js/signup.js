
let users = [];



(()=>{

    let item = localStorage.getItem('users')
    if(item) users = JSON.parse(item);

    let login_session = localStorage.getItem('loggedInUser');
    if(login_session)
    {
        window.location.href = './quiz.html'
    }


})();


function signUp(e)
{
    e.preventDefault();  
    let fullname = document.querySelector('#fullname').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let cpassword = document.querySelector('#cpassword').value;
   
    if(fullname && email && password && cpassword)
    {

        for (let index = 0; index < users.length; index++) {
            
            if(users[index].email === email)
            {
                spanerror.innerText = 'Account Already exist.'
                return ;
            }
            
        }
        
        if(password !== cpassword)
        {
            spanerror.innerText = "Password and confirm password does not match."
            return ; 
        }
        
    }
    else
    {
        spanerror.innerText = 'Please fill form'  ;
        return; 
    }





    let newUser = 
    {
        fullname,
        email,
        password,
        cpassword,
    }


     users.push(newUser);

     localStorage.setItem('users',JSON.stringify(users));
     
     spanerror.innerText = '';
     spansuccess.innerText = 'Signup Successfully'
        
     setTimeout(() => {
        spansuccess.innerText = "";
     }, 2000);

     e.target.reset();

}







