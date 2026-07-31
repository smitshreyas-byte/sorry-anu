// =============================
// TYPEWRITER MESSAGE
// =============================

const message = `Every word on this website comes from my heart...

I know I hurt you.

I know my actions made you feel bad.

Those beautiful three days we spent together
were special to me.

Seeing tears in your eyes broke my heart.

I am not here to make excuses.

I just want to say...

I am truly sorry, Anu ❤️`;


let index = 0;


function typeWriter(){

    if(index < message.length){

        document.getElementById("typing").innerHTML += 
        message.charAt(index);

        index++;

        setTimeout(typeWriter,45);

    }

}


typeWriter();




// =============================
// FLOATING HEARTS
// =============================


function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";


    const hearts=[
        "❤️",
        "💕",
        "💖",
        "💞",
        "💗"
    ];


    heart.innerHTML =
    hearts[Math.floor(Math.random()*hearts.length)];


    heart.style.left =
    Math.random()*100+"%";


    heart.style.animationDuration =
    (5+Math.random()*6)+"s";


    heart.style.fontSize =
    (20+Math.random()*30)+"px";


    document.body.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },12000);


}



setInterval(createHeart,400);




// =============================
// ROSE PETALS
// =============================


function createPetal(){


    const petal=document.createElement("div");


    petal.className="petal";


    petal.innerHTML="🌹";


    petal.style.left =
    Math.random()*100+"%";


    petal.style.animationDuration =
    (5+Math.random()*5)+"s";


    petal.style.fontSize =
    (15+Math.random()*20)+"px";



    document.body.appendChild(petal);



    setTimeout(()=>{

        petal.remove();

    },10000);


}



setInterval(createPetal,500);




// =============================
// STAR EFFECT
// =============================


function createStar(){


    const star=document.createElement("div");


    star.className="star";


    star.style.left =
    Math.random()*100+"%";


    star.style.top =
    Math.random()*100+"%";


    star.style.animationDelay =
    Math.random()*2+"s";


    document.body.appendChild(star);



}



for(let i=0;i<120;i++){

    createStar();

}




// =============================
// MUSIC CONTROL
// =============================


let musicPlaying=false;


function playMusic(){


    const music =
    document.getElementById("music");


    if(!musicPlaying){


        music.play();


        musicPlaying=true;


        document.querySelector(".music-btn").innerHTML="⏸️";


    }

    else{


        music.pause();


        musicPlaying=false;


        document.querySelector(".music-btn").innerHTML="🎵";


    }


}




// =============================
// NEXT PAGE TRANSITION
// =============================


function nextPage(){


    const transition =
    document.getElementById("transition");


    transition.style.transform="translateX(0)";



    setTimeout(()=>{


        window.location.href="page2.html";


    },800);



}
