




function logIn(e)
{

    e.preventDefault();  

    let email = document.querySelector('#lemail').value;
    let password = document.querySelector('#lpass').value;

    let user = JSON.parse(localStorage.getItem('users'));
    let flag = false
    if(email && password)
    {
        for (let index = 0; index < user.length; index++) {
            if(user[index].email === email)
            {   
                flag = true ; 
                if(user[index].password === password)
                {
                    localStorage.setItem('loggedInUser', email);
                    lspansuccess.innerText = 'log in success';

                    setTimeout(() => {
                        lspansuccess.innerText = '';
                        window.location.href = './dashboard.html'
                    }, 1300);
                }
                else
                {
                    lspanerror.innerText = 'Incorret Password';
                }
            }
            
        }
        if(!flag)
        {
            lspanerror.innerText = 'User not Found';
        }

    }
    else
    {
        lspanerror.innerText = 'Please fill form';

        
    }


}







