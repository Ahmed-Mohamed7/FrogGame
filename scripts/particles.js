class particles{
    //For  the dust and ripples under frog so i will always take 
    // x,y position of frog (under the frog)
     constructor(x,y){
        this.x= x+frogger1.width/2;
        this.y = y+frogger1.height/2;
        this.radius = Math.random() * 20 +1; // radius of particle
        //make particle disapear slowly
        // and spread under frog
        this.opacity = 1;
        this.directionx = Math.random()*1 -0.5;
        this.directiony = Math.random()*1 -0.5;
        this.color = '#8d8c8c';
    }
    draw(){
        //ctx3.fillstyle = 'red';
        ctx3.fillStyle = 'rgba(150,150,150,'+this.opacity+')';
        ctx3.beginPath(); //start draw
       // ctx3.fillstyle = 'rgba(255,0,0,'+ this.opacity+')';
        ctx3.arc(this.x,this.y,this.radius,0,Math.PI*2); //draw circle path
        ctx3.fill();
        ctx3.closePath();
    }
    //move particle in animation
    update(){
        this.x += this.directionx;
        this.y += this.directiony;
        if(this.opacity > 0.1){
            this.opacity -= 0.9;
        }
        if(this.radius>0.15){
            this.radius -= 0.14;
        }
      //  console.log(this.opacity);
    }
    ripple(){
        if(this.radius < 30){
            this.radius += 0.7;
            this.x -= 0.03;
            this.y -= 0.03;
        }
        if(this.opacity > 0){
            this.opacity -= 0.02;
        }
    }
    draw_ripples(){
        ctx1.beginPath(); //start draw
        ctx1.strokeStyle = 'rgba(255,255,255,'+this.opacity+')';
       // c1x3.fillstyle = 'rgba(255,0,0,'+ this.opacity+')';
        ctx1.arc(this.x,this.y,this.radius,0,Math.PI*2); //draw circle path
        ctx1.stroke();
        ctx1.closePath();
    }
    
}
function handle_particles(){
    //Dust
    for(let i = 0; i<particlearray.length; i++){

        particlearray[i].update();
        particlearray[i].draw();
    }
    if(particlearray.length >maxparticles){
        for (let i = 0; i < 30; i++) {
            particlearray.pop();
        }
    }
    if((keys[37]|| keys[38]|| keys[39]|| keys[40]) && (frogger1.y > 250 || frogger1.y<100)  && particlearray.length < maxparticles+10){ //frog is moving
        for (let i = 0; i < 10; i++) {
            particlearray.unshift(new particles(frogger1.x,frogger1.y)); 
        }
    }

    //Water Ripples
    for(let i = 0; i<ripples_array.length; i++){

        ripples_array[i].ripple();
        ripples_array[i].draw_ripples();
    }
    if(ripples_array.length >20){
        for (let i = 0; i < 5; i++) {
            ripples_array.pop();
        }
    }
    if((keys[37]|| keys[38]|| keys[39]|| keys[40]) && frogger1.y < 250 && frogger1.y >100 ){ //frog is moving
        for (let i = 0; i < 10; i++) {
            ripples_array.unshift(new particles(frogger1.x,frogger1.y)); 
        }
    }
}