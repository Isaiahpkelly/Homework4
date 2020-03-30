let testQuestion = [
    "Lexical Scopes are?<br /><br />",
    "What is recursion?<br /><br />",
    "Most coomon loop?<br /><br />",
    "What is DOM?<br /><br />"
];

let a1 = ["<button class=buttons002 onclick=q1c()>Local or Global</button>",
          "<button class=buttons002 onclick=q2i()>Do Not Repeat Yourself</button>",
          "<button class=buttons002 onclick=q3i()>java loop</button>",
          "<button class=buttons002 onclick=q4i()>Dot's Over Mouse</button>"
        ];

let a2 = ["<button class=buttons002 onclick=q1i()>Works a 9-5</button>",
          "<button class=buttons002 onclick=q2i()>Style Sheets</button>",
          "<button class=buttons002 onclick=q3c()>for loop</button>",
          "<button class=buttons002 onclick=q4c()>Document Object Module</button>"
        ];

let a3 = ["<button class=buttons002 onclick=q1i()>Deals with angles</button>",
          "<button class=buttons002 onclick=q2c()>A function that calls itself</button>",
          "<button class=buttons002 onclick=q3i()>temperal literals loop</button>",
          "<button class=buttons002 onclick=q4i()>Data Over Memory</button>"
        ];

let a4 = ["<button class=buttons002 onclick=q1i()>No clue</button>",
          "<button class=buttons002 onclick=q2i()>while loop</button>",
          "<button class=buttons002 onclick=q3i()>HTML loop</button>",
          "<button class=buttons002 onclick=q4i()>Document Organizer Minimizer</button>"
        ];

let c = ["Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct", "Correct"];
let i = ["Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect", "Incorrect",];
let timerDiv = document.getElementById("gameTimer");
let secondsLeft = 60;
let newSecondsLeft = secondsLeft++;

let n = 0;
n++;
let s = 0;
s++;

function beginQuiz() {
    disappear001.innerHTML = "";
    message001.innerHTML = "";
    question001.innerHTML = testQuestion[0];
    option001.innerHTML = a1[0];
    option002.innerHTML = a2[0];
    option003.innerHTML = a3[0];
    option004.innerHTML = a4[0];
    questionNumber.innerHTML = n++;
    setTime();
}

function q1c() {
    answer001.innerHTML = "<div id=green001>" + c[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    nextButton.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
    testScore.innerHTML = s++;
    addTime();
}

function q1i() {
    answer001.innerHTML = "<div id=red001>" + i[0] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    nextButton.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
    minusTime();
    
}


function new002() {
   question001.innerHTML = testQuestion[1];
    option001.innerHTML = a1[1];
    option002.innerHTML = a2[1];
    option003.innerHTML = a3[1];
    option004.innerHTML = a4[1];
    nextButton.innerHTML = "";
    answer001.innerHTML = "";
    questionNumber.innerHTML = n++;
}

function q2c() {
    answer001.innerHTML = "<div id=green001>" + c[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    nextButton.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
    testScore.innerHTML = s++;
    addTime();
}

function q2i() {
    answer001.innerHTML = "<div id=red001>" + i[1] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    nextButton.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
    minusTime();
    
}

function new003() {
   question001.innerHTML = testQuestion[2];
    option001.innerHTML = a1[2];
    option002.innerHTML = a2[2];
    option003.innerHTML = a3[2];
    option004.innerHTML = a4[2];
    nextButton.innerHTML = "";
    answer001.innerHTML = "";
    questionNumber.innerHTML = n++;
}

function q3c() {
    answer001.innerHTML = "<div id=green001>" + c[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    nextButton.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
    testScore.innerHTML = s++;
    addTime();
}

function q3i() {
    answer001.innerHTML = "<div id=red001>" + i[2] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    nextButton.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
    minusTime();
    
}

function new004() {
   question001.innerHTML = testQuestion[3];
    option001.innerHTML = a1[3];
    option002.innerHTML = a2[3];
    option003.innerHTML = a3[3];
    option004.innerHTML = a4[3];
    nextButton.innerHTML = "";
    answer001.innerHTML = "";
    questionNumber.innerHTML = n++;
}

function q4c() {
    answer001.innerHTML = "<div id=green001>" + c[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    nextButton.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
    testScore.innerHTML = s++;
    addTime();
}

function q4i() {
    answer001.innerHTML = "<div id=red001>" + i[3] + "</div>";
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    nextButton.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
    minusTime();
    
}

function end001() {
   question001.innerHTML = "End of the Quiz"
    option001.innerHTML = "";
    option002.innerHTML = "";
    option003.innerHTML = "";
    option004.innerHTML = "";
    nextButton.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Retake Quiz?</button>" + "</div>";
    answer001.innerHTML = "";
   let userName = prompt("Enter your name");
   document.write ( userName );
   document.write (s);
}

function repeat001() {
    location.reload();
}   
    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timerDiv.textContent = secondsLeft;
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                end001();
            }
            
        }, 1000);
    }
    function minusTime() {
        setTime(-2);
                              
        }
        

        function addTime() {
        setTime(+10);
        
                              
        }
    

    console.log(newSecondsLeft);
    console.log(secondsLeft);