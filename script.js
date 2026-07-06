// Loading Screen

window.onload = () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

        document.getElementById("welcome").classList.remove("hidden");

        startTyping();

        createHearts();

    },3000);

}


// Typewriter Effect

function startTyping(){

    const text = [

        "This isn't just a website...",

        "It's a little piece of my heart.",

        "Every line was made just for you.",

        "I hope this makes you smile ❤️"

    ];

    let i=0;

    let j=0;

    let current="";

    let typing=document.getElementById("typing");

    function type(){

        if(i<text.length){

            if(j<text[i].length){

                current+=text[i][j];

                typing.innerHTML=current;

                j++;

                setTimeout(type,40);

            }else{

                setTimeout(()=>{

                    current="";

                    j=0;

                    i=(i+1)%text.length;

                    type();

                },1800);

            }

        }

    }

    type();

}


// Floating Hearts

function createHearts(){

    const container=document.getElementById("heart-container");

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.innerHTML="💙";

        heart.style.position="fixed";

        heart.style.left=Math.random()*100+"vw";

        heart.style.bottom="-50px";

        heart.style.fontSize=(20+Math.random()*20)+"px";

        heart.style.opacity=".8";

        heart.style.transition="all 8s linear";

        heart.style.zIndex="2";

        container.appendChild(heart);

        setTimeout(()=>{

            heart.style.transform="translateY(-110vh)";

            heart.style.opacity="0";

        },100);

        setTimeout(()=>{

            heart.remove();

        },8500);

    },700);

}


// Start Button

document.addEventListener("click",(e)=>{

    if(e.target.id==="startBtn"){

        // Start Button

document.getElementById("startBtn").addEventListener("click", () => {

    document.querySelector(".glass").style.transition = "1s";
    document.querySelector(".glass").style.opacity = "0";
    document.querySelector(".glass").style.transform = "scale(0.9)";

    setTimeout(() => {

        document.body.innerHTML = `

        <section id="memoryPage">

            <div class="memoryBox">

                <h1>Our Beautiful Story 💙</h1>

                <img src="${photos[0]}" class="memoryPhoto">

                <h2>${captions[0]}</h2>

                <button id="nextMemory">
                    Next →
                </button>

            </div>

        </section>

        `;

    },1000);

});

    }

});

const photos = [
    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg"
];

const captions = [
    "The day everything changed 💙",
    "Every smile became my happiness.",
    "You became my favorite person.",
    "Every moment with you is priceless.",
    "And this is just the beginning ❤️"
];

let current = 0;

document.addEventListener("click", function(e){

    if(e.target.id === "nextMemory"){

        current++;

        if(current >= photos.length){

            current = 0;
        }

        document.querySelector(".memoryPhoto").src = photos[current];

        document.querySelector(".memoryBox h2").innerHTML = captions[current];

    }

});

document.addEventListener("click", function(e){

    if(e.target.id==="nextMemory"){

        document.body.innerHTML = `

<section id="letterPage">

    <div class="envelope">

        <div class="letter">

            <h1>💌 A Letter For You</h1>

            <p id="letterText"></p>

            <button id="openProposal">
                Continue ❤️
            </button>

        </div>

    </div>

</section>

`;

        typeLetter();

    }

});

function typeLetter(){

const message =

`Dear Haruuniiii,

From the day you came into my life,

everything became more beautiful.

Every smile,
every conversation,
every little memory...

became my favourite part of life.

Thank you for being you.

— Saran ❤️`;

let i=0;

const text=document.getElementById("letterText");

function typing(){

if(i<message.length){

text.innerHTML+=message.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();

}

document.addEventListener("click", function(e){

    if(e.target.id === "openProposal"){

        document.body.innerHTML = `

<section id="proposalPage">

    <div class="proposalBox">

        <h1>Haruuniiii 💙</h1>

        <h2>Will You Be Mine Forever?</h2>

        <div class="buttons">

            <button id="yesBtn">YES ❤️</button>

            <button id="noBtn">NO 🙈</button>

        </div>

    </div>

</section>

`;

        moveNoButton();

    }

});

function moveNoButton(){

    const no=document.getElementById("noBtn");

    no.addEventListener("mouseover",()=>{

        const x=Math.random()*(window.innerWidth-150);

        const y=Math.random()*(window.innerHeight-100);

        no.style.position="absolute";
        no.style.left=x+"px";
        no.style.top=y+"px";

    });

}

document.addEventListener("click",function(e){

if(e.target.id==="yesBtn"){

    fetch("/api/send", {
    method: "POST"
})
.catch(err => console.log(err));

document.body.innerHTML=`

<section id="yesPage">

<h1 class="yesTitle">

She Said YES ❤️

</h1>

<h2>

Thank You Haruuniiii 💙

</h2>

<p>

This is the beginning of our forever...

</p>

<div class="heartRain"></div>

</section>

`;

createHeartRain();

launchCelebration();

}

});

function createHeartRain(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💙";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-50px";

heart.style.fontSize=(25+Math.random()*25)+"px";

heart.style.transition="5s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

},100);

setTimeout(()=>{

heart.remove();

},5500);

},200);

}

function launchCelebration(){

    const duration = 6000;
    const end = Date.now() + duration;

    (function frame(){

        confetti({
            particleCount:6,
            angle:60,
            spread:60,
            origin:{x:0}
        });

        confetti({
            particleCount:6,
            angle:120,
            spread:60,
            origin:{x:1}
        });

        if(Date.now() < end){

            requestAnimationFrame(frame);

        }

    })();

}