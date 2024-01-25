let team1score=document.querySelector(".team1 .teamscore .score")
let team1wicket=document.querySelector(".team1 .teamscore .wicket")
let team1over=document.querySelector(".team1 .socry .overs .over")
let team1ball=document.querySelector(".team1 .socry .overs .ball")
team1score.innerText=0;
team1wicket.innerText=0;
let over1=0;
team1over.innerText=over1;
let ball1=0;
team1ball.innerText=ball1;
let edit1Wick=document.querySelector(".edit #wicket select");

let run1=document.querySelectorAll(".edit button")

//team 2

let team2score=document.querySelector(".team2 .teamscore .score")
let team2wicket=document.querySelector(".team2 .socry .teamscore .wicket")
let team2over=document.querySelector(".team2 .socry .overs .over")
let team2ball=document.querySelector(".team2 .socry .overs .ball")
team2score.innerText=0;
team2wicket.innerText=0;
let over2=0;
team2over.innerText=over2;
let ball2=0;
team2ball.innerText=ball2;
let edit2Wick=document.querySelector(".edit #wicket select");
    
let run2=document.querySelectorAll(".edit button")


//turn logic

let team1turn=true;
let team2turn=false;
const checkturnchange=()=>{
if(team1over.innerText=='20'||team1wicket.innerText=='10'){
    team1turn=false;
    team2turn=true;
}
}

if(team1turn){

const increaseOver=()=>{
    ball1++;
team1ball.innerText=ball1;
if(ball1==6){
    ball1=0;
    over1++;
    team1ball.innerText=ball1;
    team1over.innerText=over1;

}
}


for (let i = 0; i <= 5; i++) {
    run1[i].addEventListener("click",()=>{
        team1score.innerText=parseInt(team1score.innerText)+parseInt(run1[i].innerText);
        increaseOver();
        checkturnchange();
    })
}

edit1Wick.addEventListener("change",()=>{
    team1wicket.innerText++;
    checkturnchange();
})


}




//team2 settings

if(team2turn){


    
    
    const increaseOver=()=>{
        ball2++;
    team2ball.innerText=ball2;
    if(ball2==6){
        ball2=0;
        over2++;
        team2ball.innerText=ball2;
        team2over.innerText=over2;
    
    }
    }
    
    

    
    
    for (let i = 0; i <= 5; i++) {
        run2[i].addEventListener("click",()=>{
            team2score.innerText=parseInt(team2score.innerText)+parseInt(run2[i].innerText);
            increaseOver();
        })
    }
    
    edit2Wick.addEventListener("change",()=>{
        team2wicket.innerText++;
    })

}



