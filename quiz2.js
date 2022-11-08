const start_test = document.querySelector(".start_btn button");
const instructions_box = document.querySelector(".instructions_box");
const exit_btn = instructions_box.querySelector(".buttons .exit");
const start_btn = instructions_box.querySelector(".buttons .start");
const test_box = document.querySelector(".test_box");
const timeCount = test_box.querySelector(".timer .timer_min");
const timerLine = test_box.querySelector("header .timer_line");
const timerOff = test_box.querySelector("header .timer_left");

const que_list = document.querySelector(".answer_list");

start_test.onclick = ()=>{
instructions_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
instructions_box.classList.remove("activeInfo");
}

start_btn.onclick = ()=>{
instructions_box.classList.remove("activeInfo");
test_box.classList.add("activeQuiz");
showQuestions(0);
footerCounter(1);
startTimer(900);
startTimerLine(0);
}

const next_que = test_box.querySelector(".next_question");
const result_box = document.querySelector(".result_box");


let que_count = 0;
let que_numb = 1;
let counter;
let widthValue = 0;
let userScore = 0;

next_que.onclick = ()=>{
if(que_count < secondround.length - 1) {
que_count++;
que_numb++;
showQuestions(que_count);
footerCounter(que_numb);
timerOff.textContent = "Time Left";
} else {
console.log('Round-2 Completed');
nezt_que.InnerHtml('Proceed to Round-3');
}
}

function showQuestions(index) {
const que_text = document.querySelector(".question");

let que_question = '<span>' + secondround[index].numb + ". " + secondround[index].question + '</span>';
let ans_list = '<div class="answer">' + secondround[index].options[0] + '<span></span></div>' +
'<div class="answer">' + secondround[index].options[1] + '<span></span></div>' +
'<div class="answer">' + secondround[index].options[2] + '<span></span></div>' +
'<div class="answer">' + secondround[index].options[3] + '<span></span></div>' ;
que_text.innerHTML = que_question;
que_list.innerHTML = ans_list;
const option = que_list.querySelectorAll(".answer");
for (let i = 0; i < option.length; i++) {
option[i].setAttribute("onclick", "optionsSelected(this)");
}
}



function optionsSelected(answer) {
console.log(answer);
let userAnswer = answer.textContent;
let correctAnswer = secondround[que_count].answer;
let allOptions = que_list.children.length;

answer.classList.add("correct");
if (userAnswer == correctAnswer) {
userScore += 1;
console.log(userScore);
} else {

}

for (let i = 0; i < allOptions; i++) {
que_list.children[i].classList.add("disable");
}

}

function startTimer(time) {
counter = setInterval(timer, 1000);
function timer() {
timeCount.textContent = time;
time--;
if (time < 9) {
let addZero = timeCount.textContent;
timeCount.textContent = "0" + addZero;
}
if(time < 0) {
clearInterval(counter);
timeCount.textContent = "00";
timerOff.textContent = "Time Out";
showResultBox();
}
}
}

function startTimerLine(time) {
counterLine = setInterval(timer, 1800);
function timer() {
time += 1;
timerLine.style.width = time + "px";
if(time > 549) {
clearInterval(counterLine);
}
}
}

function footerCounter(index) {
const footerCount = test_box.querySelector(".total_questions");
let totalCounTag = ' <span><p>' + index + '</p>of<p>' + secondround.length + '</p>Questions</span>';
footerCount.innerHTML = totalCounTag;
}