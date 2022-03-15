let points = 0;
let move;
const end = document.querySelector('.end');
const result = document.querySelector('.result');
const StartGame_button = document.querySelector('.Start-game-button');
const restart_button = document.querySelector('.restart-button');
const gameover = document.querySelector('.gameover');
const originalLitera = document.querySelector('.litera');
let litera = '';
var tablicaliter = ['A','B','C','D','E','F','G','H','I','J','K','L','Ł','M','N','O','P','R','S','T','U','W','Y','Z'];

StartGame_button.addEventListener('click',gaming);
restart_button.addEventListener('click',gaming);

function  gaming(){
  //
StartGame_button.style.display='none';
result.textContent=0;
end.textContent=0;
  end.style.color='';
let warningpoints=0;
gameover.style.display='none';
 document.removeEventListener('keydown',move); 

  
  //
const resetInterval = setInterval(()=>{
  
  const elementLitera = originalLitera.cloneNode(true);
  litera = tablicaliter[Math.floor(Math.random()*tablicaliter.length)];
  elementLitera.textContent = litera;
  elementLitera.style.left = Math.random()*(window.innerWidth-20)+'px';
  document.body.append(elementLitera);
  
  setTimeout(()=>{
    elementLitera.classList.add('animatetop');
  },300);
  
  const litery = document.querySelectorAll('.litera');
  
  for(var i=0;i<litery.length;i++){
    if(litery[i].offsetTop>=window.innerHeight){
      litery[i].remove();
      end.textContent=++warningpoints;
    }
    if(warningpoints>3){
      end.style.color='red';
    }
    if(warningpoints>=5){
     litery[i].remove();
      gameover.style.display="flex";
      clearInterval(resetInterval);
      }
  }
},2000);

 move = function(e){
  const litery = document.querySelectorAll('.litera.animatetop');
  for(var j=0;j<litery.length;j++){
    if(litery[j].textContent===e.key.toUpperCase()){
      result.textContent = ++points;
      litery[j].remove();
    }
  }
}
document.addEventListener('keydown',move);
}

