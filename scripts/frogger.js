class frogger{
    //
    constructor(){
        //frame width of frog character
        // i can use another sprite sheet and calc width and height of frog character
       this.spritewidth = 250;
        this.spriteheight = 250 ;
        //want frog 5 times smaller
        this.width =this.spritewidth/5; 
        this.height = this.spriteheight/5;
        //x_position of frog
        this.x = canvas.width/2 - this.width/2;
        //y_position of frog
        this.y = canvas.height - this.height - 30;
        this.moving = false ; //prevent frog from moving so fast
       // jmp bet frames
       this.framex = 0; // for frog animation
       this.framey = 0;
    }
    update(){ // draw sprites on canvas
        //console.log('update')
        if (keys[38]){ // up  no upper limits 
            if(this.moving === false){
                this.y -= grid; // move 80px up 
                this.moving = true;
                direction = 0;

            }
        }
        else if (keys[37]){ // left
            if(this.moving === false){
                if(this.x>this.width)
                {
                this.x -= grid; // move 80px up 
                this.moving = true;
                direction = 2;
                }
            }
        }
        //down
        else if (keys[40]){
            if(this.moving === false){
                if (this.y < canvas.height - this.height *2)
                this.y += grid; // move 80px up 
                this.moving = true;
                direction = 3;

            }
        }
        else if (keys[39]){ // right
            if(this.moving === false){
                if(this.x < canvas.width- this.width*2)
                {
                this.x += grid; // move 80px up 
                this.moving = true;
                direction = 1;
                }
            }
        }
        if(this.y<0) {
            scored();
        }
        
    }
    /*
    canvas 1 => particle effects
    canvas2 => logs and turtles
    canvas3 => frog
    canvas 4 => cars
    */
   draw(direction){
    //ctx2.drawImage(cars,0,this.random_car * this.height,grid*2,grid,this.x,this.y,this.width,this.height);

    ctx3.drawImage(frog,0,direction*this.spriteheight,this.spritewidth,this.spriteheight,this.x - 25,this.y - 25,this.width*2,this.height*2);

       //ctx3.fillStyle = frog_color;
       //ctx3.fillRect(this.x,this.y,this.width,this.height);
   }
   jump(){
       console.log('jump');
   }
}

const frogger1 = new frogger();