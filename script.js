let selectedProblem = null;

const cards = document.querySelectorAll(".problem-card");
const diagnoseBtn = document.getElementById("diagnoseBtn");
const resultCard = document.getElementById("resultCard");

cards.forEach(card=>{

card.addEventListener("click",()=>{

cards.forEach(c=>c.classList.remove("selected"));

card.classList.add("selected");

selectedProblem = card.dataset.problem;

});

});

diagnoseBtn.addEventListener("click",()=>{

if(!selectedProblem){

alert("Please select a cloud issue first.");

return;

}

startScanner();

});
function startScanner(){

const scanner=document.getElementById("scanner");

const fill=document.getElementById("scanFill");

const status=document.getElementById("scanStatus");

scanner.classList.remove("hidden");

const steps=[

"Connecting to cloud...",

"Scanning API Gateway...",

"Checking Compute Layer...",

"Inspecting Storage...",

"Analyzing Network...",

"Finding Best AWS Service...",

"Generating Report..."

];

let i=0;

let progress=0;

const timer=setInterval(()=>{

status.innerHTML=steps[i];

progress+=15;

fill.style.width=progress+"%";

i++;

if(i>=steps.length){

clearInterval(timer);

setTimeout(()=>{

scanner.classList.add("hidden");

showDiagnosis();

},900);

}

},700);

}

function showLoading(){

diagnoseBtn.disabled=true;

diagnoseBtn.innerHTML="Analyzing Infrastructure...";

let progress=0;

const interval=setInterval(()=>{

progress+=10;

diagnoseBtn.innerHTML=`Analyzing ${progress}%`;

if(progress>=100){

clearInterval(interval);

diagnoseBtn.innerHTML="Diagnosis Complete";

setTimeout(showDiagnosis,600);

}

},120);

}
function showDiagnosis(){

const data=diagnoses[selectedProblem];

document.getElementById("healthScore").innerText=data.health+"%";

const circle=document.getElementById("progressCircle");

const radius=75;

const circumference=2*Math.PI*radius;

circle.style.strokeDasharray=circumference;

circle.style.strokeDashoffset=

circumference-(data.health/100)*circumference;

document.getElementById("healthStatus").innerText=data.status;

document.getElementById("detectedIssue").innerText=data.issue;

document.getElementById("serviceName").innerText=data.service;

document.getElementById("reason").innerText=data.reason;

document.getElementById("alternative").innerText=data.alternative;

const flow=document.getElementById("architectureFlow");

flow.innerHTML="";

data.architecture.forEach((step,index)=>{

const node=document.createElement("div");

node.innerHTML=step;

node.style.opacity=0;

flow.appendChild(node);

if(index!==data.architecture.length-1){

const arrow=document.createElement("div");

arrow.className="arrow";

arrow.innerHTML="⬇";

arrow.style.opacity=0;

flow.appendChild(arrow);

}

});

const list=document.getElementById("bestPractices");

list.innerHTML="";

data.bestPractices.forEach(item=>{

const li=document.createElement("li");

li.innerText=item;

list.appendChild(li);

});

resultCard.classList.remove("hidden");

resultCard.animate([

{

opacity:0,

transform:"translateY(80px) scale(.95)"

},

{

opacity:1,

transform:"translateY(0px) scale(1)"

}

],{

duration:700,

easing:"ease"

});

resultCard.scrollIntoView({

behavior:"smooth"

});

animateArchitecture();

}

function animateArchitecture(){

const items=document.querySelectorAll("#architectureFlow div");

items.forEach((item,index)=>{

setTimeout(()=>{

item.style.opacity=1;

item.style.transform="translateY(0px)";

},index*300);

});

}