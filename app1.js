let body=document.querySelector("body");
let team1score=document.querySelector(".team1 .teamscore .score")
let team1wicket=document.querySelector(".team1 .teamscore .wicket")
let team1over=document.querySelector(".team1 .socry .overs .over")
let team1ball=document.querySelector(".team1 .socry .overs .ball")
let msg=document.querySelector(".msg")
team1score.innerText=0;
team1wicket.innerText=0;
let over1=0;
team1over.innerText=over1;
let ball1=0;
team1ball.innerText=ball1;
let editWick=document.querySelector(".edit #wicket select");

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
    
let run2=document.querySelectorAll(".edit button")


//turn logic









// const turnchange=()=>{
//     if(team1turn){
//         team1turn=0;
//         team2turn=1;
//     }
//     else{
//         team1turn=1;
//         team2turn=0;
//     }
    
// }


let team1turn=true;
let team2turn=false;    
let turnchange=()=>{
  
        team2turn=true;
        team1turn=false;

        console.log("turn is changed")
  
}





for (let i = 0; i <= 5; i++) {
    run1[i].addEventListener("click",(evt)=>{
        increaseScore(evt);
        console.log(evt.srcElement.innerText);
        increaseOver();

    })
}



body.addEventListener('keypress', function(event) {


    if (event.key === "1") {
          increaseScorebykey(event.key);
          increaseOver();
 
      }

      if (event.key === "2") {
        increaseScorebykey(event.key);
          increaseOver();

      }

      if (event.key === "3") {
        increaseScorebykey(event.key);
          increaseOver();

      }

      if (event.key === "4") {
        increaseScorebykey(event.key);
          increaseOver();
 
      }

      if (event.key === "6") {
        increaseScorebykey(event.key);
          increaseOver();

      }

      if (event.key === "0") {
        increaseScorebykey(event.key);
          increaseOver();

        }
      
      if (event.key==="w"||event.key==="W"){
        increasewicket();
      }
        
        
        
    });

    const declarewinner=()=>{
      if((over1==20 && over2==20)||(team1wicket.innerText==='10'&&over2==20)||(team2wicket.innerText=='10'&&over1==20)||(team1wicket.innerText=='10'&&team2wicket.innerText=='10')){
        if(parseInt(team1score.innerText)>parseInt(team2score.innerText)){
          msg.innerText="Team1 is winner"
        }
        else if(parseInt(team1score.innerText)<parseInt(team2score.innerText)){
          msg.innerText="Team2 is winner"
        }
      }
      console.log("winner is searching")
      
    }


    const msgchange=()=>{
      if(over1<20 && parseInt(team1wicket.innerText)<'10'){
        msg.innerText="Team1 is playing"
      }
      else if(over2<20 && parseInt(team2wicket.innerText)<'10'){
        msg.innerText="Team2 is playing"
        
      }
      else{
        msg.innerText="game is over"
        declarewinner();
      }
    }

    
    const increaseScore=(evt)=>{
      if(over1<20 && parseInt(team1wicket.innerText)<'10'){

        team1score.innerText=parseInt(team1score.innerText)+parseInt(evt.srcElement.innerText);
      }
      else if(over2<20 && parseInt(team2wicket.innerText)<'10'){
        team2score.innerText=parseInt(team2score.innerText)+parseInt(evt.srcElement.innerText);

      }
      declarewinner()
      msgchange()
    }

      const increaseScorebykey=(a)=>{
        console.log("function is triggered")
        if(over1<20 && parseInt(team1wicket.innerText)<'10'){
  
          team1score.innerText=parseInt(team1score.innerText)+parseInt(a);
        }
        else if(over2<20 && parseInt(team2wicket.innerText)<'10'){
          team2score.innerText=parseInt(team2score.innerText)+parseInt(a);
  
        }
        declarewinner();}
        msgchange()

        const increaseOver=()=>{
          if(over1<20 && parseInt(team1wicket.innerText)<'10')
     {     ball1++;
      team1ball.innerText=ball1;
      if(ball1==6){
          ball1=0;
          over1++;
          team1ball.innerText=ball1;
          team1over.innerText=over1;
      
      }}
      else if(over2<20 && parseInt(team2wicket.innerText)<'10'){
        ball2++;
        team2ball.innerText=ball2;
        if(ball2==6){
            ball2=0;
            over2++;
            team2ball.innerText=ball2;
            team2over.innerText=over2;
        
        }
      }
      declarewinner();
      msgchange()
      }
  
      
      const increasewicket=()=>{
        if(over1<20 && parseInt(team1wicket.innerText)<'10'){
          team1wicket.innerText++;
        }
        else if(over2<20 && parseInt(team2wicket.innerText)<'10'){
          team2wicket.innerText++;
        }
        declarewinner();
        msgchange();
      }
      
      editWick.addEventListener('change',()=>{
        increasewicket();
        declarewinner();
        msgchange();
       })
  



  
    


