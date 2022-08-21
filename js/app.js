var count = 0

let ques = document.querySelector('#q')
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let option1 = document.querySelector('#option1')
let option2 = document.querySelector('#option2')
let option3 = document.querySelector('#option3')
let option4 = document.querySelector('#option4')

let quizName = localStorage.getItem('quizName')
let loggedInUser = localStorage.getItem('loggedInUser')

let quiz = localStorage.getItem('quizzes')

quiz = JSON.parse(quiz)

quiz = quiz[quizName];

(() => {

  
  //   let quizName = localStorage.getItem('result' + '_' + quizName)
  let quizName = localStorage.getItem('quizName')
  document.querySelector('#quiz').innerText = 'Quiz App : ' + quizName.toLocaleUpperCase() ;  

  if (!quizName) {
    window.location.href = './result.html'
  }

  ques.innerText = quiz[0].q
  a.innerText = quiz[0].a
  b.innerText = quiz[0].b
  c.innerText = quiz[0].c
  d.innerText = quiz[0].d
  option1.value = quiz[count].a
  option2.value = quiz[count].b
  option3.value = quiz[count].c
  option4.value = quiz[count].d
})()

var checked_quest = []

var btndiv = document.querySelector('#btn_div')

function nextQ() {
  var checked = document.querySelector('[name="select"]:checked')
  if (!checked) {
  }

  if (html.length !== checked_quest.length) {
    checked_quest[count] = checked.value
  }

  console.log(checked_quest)

  if (html.length - 1 === count) {
    return
  }

  checked.checked = false

  count++

  ques.innerText = quiz[count].q
  a.innerText = quiz[count].a
  b.innerText = quiz[count].b
  c.innerText = quiz[count].c
  d.innerText = quiz[count].d

  option1.value = quiz[count].a
  option2.value = quiz[count].b
  option3.value = quiz[count].c
  option4.value = quiz[count].d

  if (html.length - 1 === count) {
    btndiv.append('<button onclick="finishQuiz()">Finish</button>')
  }
}

function preQ() {
  var checked = document.querySelector('[name="select"]:checked')

  if (checked) {
    checked_quest[count] = checked.value
  } else {
    return
  }

  console.log(checked_quest)
  if (!count) {
    return
  }

  count--

  if (html.length - 2 === count) {
    btndiv.removeChild(btndiv.lastChild)
  }

  checked = ''
  ques.innerText = quiz[count].q
  a.innerText = quiz[count].a
  b.innerText = quiz[count].b
  c.innerText = quiz[count].c
  d.innerText = quiz[count].d
  option1.value = quiz[count].a
  option2.value = quiz[count].b
  option3.value = quiz[count].c
  option4.value = quiz[count].d
}


function finishQuiz() {
  let per_question_marks = 100 / quiz.length

  let total_obtained_number = 0

  for (var i = 0; i < html.length; i++) {
    if (quiz[i].correct === checked_quest[i]) {
      total_obtained_number += per_question_marks
    }
  }

  var percentage = (total_obtained_number / 100) * 100

  var results = JSON.parse(localStorage.getItem('results'))
  let rs_arr
  let check_result = results[loggedInUser];
  if (check_result) {


      rs_arr =  {
        results
      } 
      
    if (results[loggedInUser][quizName]) {
      rs_arr[loggedInUser][quizName] = percentage;
    } 
    
    else {


        for (const [key, value] of Object.entries(results[loggedInUser])) {
            rs_arr = {
              [loggedInUser]: {
              [key]: value,
              [quizName]: percentage,
              }
            }
          }

      console.log('first ELSE',rs_arr[loggedInUser]);

    }
  } else {
    
    if(results)
    {
      rs_arr = {
        // results,
        [loggedInUser]: {

          [quizName]: percentage,
      }
    };

    }
    else
    {
      rs_arr = {
        [loggedInUser]: {

            [quizName]: percentage,
        }
    };
    }
    


  }

  localStorage.setItem('results', JSON.stringify(rs_arr))

  setTimeout(() => {

    window.location.href = './result.html';
  }, 1000);

}
