// Working Clock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("displayclock").innerText = time;
    document.getElementById("displayclock").textContent = time;

    setTimeout(showTime, 1000);

}

// Date Real-time
showTime();

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "." + d + "." + y;


// hover questions

// 01 queston

window.addEventListener('mousemove', nutterbutter);

var _el = document.getElementById('question-hover-1');

_el.addEventListener('dblclick', function(){
	window.addEventListener('mousemove', nutterbutter);
	_el.addEventListener('dblclick', removeNutter);
});

function removeNutter(){
	window.removeEventListener('mousemove', nutterbutter);
	_el.removeEventListener('dblclick', removeNutter);
}
function nutterbutter(){
	_el.style.top = event.clientY + "px";
	_el.style.left = event.clientX + "px";
}

// click event

function myFunction() {
  document.getElementById("box-2").innerHTML = "How did I feel today?";
}

function myFunction() {
  document.getElementById("box-3").innerHTML = "How did I feel this week?";
}

function myFunction() {
  document.getElementById("box-4").innerHTML = "How did I feel this week?";
}

function myFunction() {
  document.getElementById("box-4").innerHTML = "What should I do to care for myself next week?";
}

function myFunction() {
  document.getElementById("box-5").innerHTML = "What do I want to remember from today?";
}

function myFunction() {
  document.getElementById("box-6").innerHTML = "What do I want to give my attention to today?";
}

function myFunction() {
  document.getElementById("box-7").innerHTML = "Who do I enjoy having in my life today?";
}

function myFunction() {
  document.getElementById("box-8").innerHTML = "What do I like about where I am right now?";
}

function myFunction() {
  document.getElementById("box-9").innerHTML = "Why should I feel proud of myself today?";
}

function myFunction() {
  document.getElementById("box-10").innerHTML = "What's something I did very well recently?";
}

function myFunction() {
  document.getElementById("box-11").innerHTML = "What do I want to improve tomorrow?";
}

function myFunction() {
  document.getElementById("box-12").innerHTML = "What's been on my mind latley?";
}

function myFunction() {
  document.getElementById("box-13").innerHTML = "How can I calm my thoughts, when I need it?";
}

function myFunction() {
  document.getElementById("box-14").innerHTML = "What does my mind or body need more of today?";
}

// bottom row outer flowers//

function myFunction() {
  document.getElementById("box-15").innerHTML = "What can I do today to make myself feel good?";
}

function myFunction() {
  document.getElementById("box-16").innerHTML = "What do I have to be thankful for today?";
}

function myFunction() {
  document.getElementById("box-17").innerHTML = "What should I do less of this week?";
}

function myFunction() {
  document.getElementById("box-18").innerHTML = "What should I do more often of this week?";
}

function myFunction() {
  document.getElementById("box-19").innerHTML = "What can I have an impact on today?";
}

function myFunction() {
  document.getElementById("box-20").innerHTML = "What have I improved on recently?";
}

function myFunction() {
  document.getElementById("box-21").innerHTML = "How do I want to feel today?";
}

function myFunction() {
  document.getElementById("box-22").innerHTML = "Who am I grateful for in my life?";
}

function myFunction() {
  document.getElementById("box-23").innerHTML = "Who have I learned from recently?";
}

function myFunction() {
  document.getElementById("box-24").innerHTML = "What can I do for someone important in my life today?";
}

function myFunction() {
  document.getElementById("box-25").innerHTML = "What do I have more than enough of in my life?";
}

function myFunction() {
  document.getElementById("box-26").innerHTML = "What do I want more of in my life?";
}

function myFunction() {
  document.getElementById("box-27").innerHTML = "What do I want to achieve today?";
}

// right side outerflowers

function myFunction() {
  document.getElementById("box-28").innerHTML = "How can I take one step closer toward my goals today?";
}

function myFunction() {
  document.getElementById("box-29").innerHTML = "What can I knock of on my to-do list?";
}

function myFunction() {
  document.getElementById("box-30").innerHTML = "What is bothering me right now?";
}

function myFunction() {
  document.getElementById("box-31").innerHTML = "Who can I show gratitude to today?";
}

function myFunction() {
  document.getElementById("box-32").innerHTML = "What lesson did I learn recently?";
}

// left side outerflowers

function myFunction() {
  document.getElementById("box-33").innerHTML = "What do I want tomorrow to look like?";
}

function myFunction() {
  document.getElementById("box-34").innerHTML = "How can I make tomorrow even better?";
}

function myFunction() {
  document.getElementById("box-35").innerHTML = "How should I take time for myself today?";
}

function myFunction() {
  document.getElementById("box-36").innerHTML = "Who did I recently enjoy my time with?";
}
