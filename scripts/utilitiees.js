function animate(){
    ctx1.clearRect(0, 0, canvas.width,canvas.height);
    ctx2.clearRect(0, 0, canvas.width,canvas.height);
    ctx3.clearRect(0, 0, canvas.width,canvas.height);
    ctx4.clearRect(0, 0, canvas.width,canvas.height);
    ctx5.clearRect(0, 0, canvas.width,canvas.height);
   // ctx3.beginPath();//ADD THIS LINE!<<<<<<<<<<<<<

    ctx2.drawImage(background_game,0,0,canvas.width,canvas.height);
    handle_particles();
    frogger1.draw(direction);
    frogger1.update();
   
    // ctx4.drawImage(grass,0,0,canvas.width,canvas.height);
    handle_score();
    ctx5.drawImage(grass,0,0,canvas.width,canvas.height);
    handle_obstacles();
    //console.log('test');
    /*
    method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an 
    animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
    */
   handle_hearts();
   frame++;
  //checkGame();
   requestAnimationFrame(animate);//animation loop recursion
}
animate();

//add event listeners 
window.addEventListener('keydown',function(e){
 keys = [];
 keys[e.keyCode] = true; // add key pressed to key arr
if(keys[37]|| keys[38] || keys[39] || keys[40] ) //up,down ,left,right arrows
{
    frogger1.jump();
}
});


//Hna 3ml el moving bta3 el frog  true 3nd el keydown bs
// w ashel el key mn keys array w a5leh el moving b false tany 
window.addEventListener('keyup',function(e){
    delete keys[e.keyCode];
    frogger1.moving = false; 
});

function scored(){
    score += 10;
    level++;
    game_speed += 0.2;
    //reset frog position
    frogger1.x = canvas.width/2 - frogger1.width/2; //center the x_position of the frog 
    //nos the canvas (box el kber) - nos th size of el frog
    frogger1.y = canvas.height - frogger1.height - 40 ; //center the y_position of the frog 
    // console.log(score);
    // console.log(canvas.width,"  ",canvas.height);

}

function handle_score(){
    ctx4.fillstyle = 'black';
    ctx4.font = '15px Verdana';
    ctx4.strokeStyle = 'black';
    ctx4.strokeText('score',265,15);
    ctx4.font = '60px Verdana';
    ctx4.fillText(score,260,65); //postion 270,65

    ctx4.font = '25px Verdana bold';
    ctx4.fillText('Game speed : '+game_speed.toFixed(1) ,20,25);
    ctx4.fillText('level : '+level ,20,55);

    //ctx4.fillText(score,270,65);
}
function handle_hearts(){
    
    for (let i = 0; i <num_hearts ; i++) {
        ctx5.drawImage(heart,450+i*40,10,50,50);
        //ctx5.fillstyle = 'red';
        
    }


}
function check_coillison(first,second,){
 
    // return (first.x+first.width > second.x &&
    //      first.x < second.x+second.width &&
    //       first.y < second.y+second.height &&
    //        first.y+first.height > second.height )
    return !(first.x > second.x + second.width ||
        first.x + first.width < second.x ||
        first.y > second.y + second.height ||
        first.y + first.height < second.y)
}

function checkGame(){
    num_hearts -- ;
    //handle_hearts();
    if(num_hearts == 0){
    score = 0;
    level = 0;
    game_speed  = 1;
    //reset frog position
    frogger1.x = canvas.width/2 - frogger1.width/2; //center the x_position of the frog 
    //nos the canvas (box el kber) - nos th size of el frog
    frogger1.y = canvas.height - frogger1.height - 40 ; //center the y_position of the frog 
    // console.log(score);
    num_hearts = 3
    }
    else{
        direction = 0;
        frogger1.x = canvas.width/2 - frogger1.width/2; //center the x_position of the frog 
        //nos the canvas (box el kber) - nos th size of el frog
        frogger1.y = canvas.height - frogger1.height - 40 ;
    }
    

}
