class obstacle{
    constructor(x,y,width,height,speed,type){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height = height;
        this.speed =speed;
        this.type = type;
        this.xframe = 0;
        this.yframe = 0;
       // this.random = Math.floor(Math.random()*30 + 30);
       this.random_car = Math.floor(Math.random()*num_cars);
    }
    draw()
    {
        if(this.type == 'car')
        {
            // ctx2.fillStyle = 'blue';
            // image, dx, dy, dWidth, dHeight);
            // ctx2.fillRect(this.x,this.y,this.width,this.height);
            if (this.speed >0)
            {
           // ctx2.drawImage(car2,this.x,this.y,this.width,this.height);
            ctx2.drawImage(cars,0,this.random_car * this.height,grid*2,grid,this.x,this.y,this.width,this.height);

            }
        else{
           
            ctx2.drawImage(cars,this.width,this.random_car* this.height,grid*2,grid,this.x,this.y,this.width,this.height);
            //ctx2.drawImage(test,this.x,this.y,this.width,this.height);
            }
        }
        else if (this.type === 'turtle')
        {
            if(frame % 50 ===0 )
            {
                if(this.xframe >= 1)
                {
                    this.xframe = 0; 
                }
                else
                    this.xframe++;
            }
            //ctx1.fillRect(this.x,this.y,this.width,this.height);
            ctx1.drawImage(turtle,this.xframe*70,this.yframe*70,70,70,this.x,this.y,this.width,this.height);
        }
        else if(this.type === 'log'){
            ctx1.drawImage(logs,this.x,this.y,this.width,this.height);
        }
    }
        // {
        // ctx2.fillStyle = 'red';
        // ctx2.fillRect(this.x,this.y,this.width,this.height);
        // }
    
    update(){ 
        //updte game speed
        //*game_speed not (+) as car moves in both directions 3lshan el -ve direction maybozsh 
        this.x += this.speed * game_speed;
        if (this.speed > 0){
            
            if(this.x > canvas.width + this.width ){
                this.x = 0 - this.width;
               // this.random_car = Math.floor(Math.random()*num_cars);
            }
        }
        else if (this.speed < 0){
            //this.framex = 1;
           
            if(this.x < 0 - this.width){
                this.x = canvas.width +this.width ;
            }
        }

    }
}
// add car and obticles for car_arr and logs_arr



//ha3ml mn kol 3arbya 2

function initobtacles(){
    // awl hara fy el tare2 lane 1
    for(let i = 0; i <2;i++){
        let x = i*350;
        //fy kol for loop 3mlt 3rbetan nfs el hagat bs el x mo5ltfa
         cars_array.push(new obstacle(x,canvas.height - grid*2 -20,grid*2,grid,1,'car'));
    }
    // tany hara fy el tare2 lane 2
    for(let i = 0 ; i<2;i++){
        let x= i *350; //-20 msh 30
        cars_array.push(new obstacle(x,canvas.height - grid*3 - 20,grid*2,grid,-2,'car'));
    }
    // tany hara fy el tare3 lane 3
    for(let i = 0;i<2;i++){
        let x = i* 400;
        cars_array.push(new obstacle(x,canvas.height - grid*4 - 20,grid*2,grid,1.5,'car'));
    }

// in the river

    //  floating tree
    for(let i = 0;i<2;i++){
        let x = i* 400;
        logs_array.push(new obstacle(x,canvas.height - grid*5 - 20,grid*2,grid,-1.5,'log'));
    }
    // turtles
    for(let i = 0;i<4;i++){
        let x = i* 190;
        logs_array.push(new obstacle(x,canvas.height - grid*6 - 20,grid,grid,1,'turtle'));
    }


}
initobtacles();

function handle_obstacles(){
    // draw and update cars
    for(let i = 0 ;i<cars_array.length;i++){
        cars_array[i].update();
        cars_array[i].draw();
    }

    //draw and update turtles
    for(let i = 0; i <logs_array.length;i++){
        logs_array[i].update();
        logs_array[i].draw();
    }

    for(let i = 0 ;i<cars_array.length;i++){
       if(check_coillison(frogger1,cars_array[i])){
          ctx4.drawImage(collision,0,100,100,100,frogger1.x,frogger1.y,50,50);

          checkGame();
       }
    }
     
    if (frogger1.y < 250 && frogger1.y >100){
        safe = false;
        for (let i = 0; i <logs_array.length; i++) {
            if(check_coillison(frogger1,logs_array[i])){
                
                frogger1.x += logs_array[i].speed;
                safe =true;
            }
            //else ctx5.drawImage(collision,0,0,100,100,frogger1.x,frogger1.y,50,50);

        }

        if (!safe){   
            for(let i = 0;i<30;i++){
                ripples_array.unshift(new particles(frogger1.x,frogger1.y));
            }
            checkGame();
        }
    }
}




