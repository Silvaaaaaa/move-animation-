const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext('2d');
canvas.width = 800 ; 
canvas.height = 500 ;

const keys = []; 

const player = {
    x :  200 , 
    y : 300 , 
    width : 40  , 
    height : 70 , 
    framex :  0 , 
    framey : 0, 
    speed : 9 ,
    moving : false ,
}

const playersprit = new Image() ; 
playersprit.src = 'https://www.frankslaboratory.co.uk/downloads/chewie.png'  ;

const background = new Image() ; 
background.src = 'https://www.frankslaboratory.co.uk/downloads/tattooine_game_background.png' ;

function drawSprit(img , sx , sy , sw , sh , dx ,dy ,dh ,dw){ // prototype for calling 
    ctx.drawImage(img , sx , sy , sw , sh , dx ,dy ,dh ,dw); 
}

// function animte(){
   
//     requestAnimationFrame(animte)
// }
// animte();

// setInterval(function(){
    
// },50 )

window.addEventListener("keydown" , function(e){
    keys[e.keyCode] = true; 
    player.moving = true
})
window.addEventListener("keyup" , function(e){
    delete keys[e.keyCode] ;    
    player.moving = false
})
function moveplayer(){
    if(keys[38] && player.y > 100){ // top
        player.framey = 3 ;
        player.y -= player.speed 
        player.moving  = true;  
    }else if(keys[40] && player.y < canvas.height - player.height){ // down 
        player.framey = 0 ;
        player.y += player.speed
       player.moving  = true; 
    }else if(keys[39] && player.x < canvas.width - player.width){ // right 
        player.framey = 2 ;
        player.x += player.speed
    player.moving  = true; 
    }else if(keys[37] && player.x > 0 ){ // left 
        player.framey = 1 ;
        player.x -= player.speed
    player.moving  = true; 
    }
}
function handelplayerframe(){
    if(player.framex < 3 && player.moving ){
    player.framex++ ;
     } else player.framex = 0 ; 
}
let fps , fpsinterval , starttime , now , then , elapsed  ; 
function starttimiing(fps){
    fpsinterval = 1000 / fps;  // 50
    then = Date.now();  // 45454565
    starttime = then;   // 45454565
    animate(); 
}
function animate(){
    requestAnimationFrame(animate);
    now = Date.now(); // time with millisecond since 1970 till now ;  
    elapsed = now - then;  // 3    
    if(elapsed > fpsinterval){
        then = now - (elapsed % fpsinterval);
        ctx.clearRect(0 , 0 , canvas.width , canvas.height) ;
        ctx.drawImage(background , 0 , 0 ,canvas.width , canvas.height);
         drawSprit(playersprit ,player.framex * player.width,player.framey * player.height, player.width , player.height ,player.x ,player.y , player.width , player.height)
          moveplayer()
         handelplayerframe()    
    }
}
starttimiing(100);