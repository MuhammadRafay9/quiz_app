

(()=>{


    let result = JSON.parse(localStorage.getItem('results'))
    let loggedInUser = localStorage.getItem('loggedInUser');

    if(!loggedInUser) window.location.href = './index.html';    
    
    let html = document.querySelector('#html');
    let css = document.querySelector('#css');

    let htmlnum = result[loggedInUser][html.textContent.toLowerCase()];
    let cssnum = result[loggedInUser][css.textContent.toLowerCase()];

    document.querySelector('#htmlresult').innerText = 'Result: '+ htmlnum +' %';
    document.querySelector('#htmlresult').innerText = 'Result: '+ cssnum +' %';
    


})()




function takeQuiz(qname) {
    
    localStorage.setItem('quizName',qname);

    window.location.href = './quiz.html'

}

function logOut()
{
    localStorage.removeItem('loggedInUser');
    window.location.href='./index.html'

}



