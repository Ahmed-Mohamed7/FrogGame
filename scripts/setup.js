const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
//method returns a drawing context on the canvas, or null
canvas.width = 600 
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
//method returns a drawing context on the canvas, or null
canvas2.width = 600 
canvas2.height = 600;


// handle the frog
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
//method returns a drawing context on the canvas, or null
canvas3.width = 600 
canvas3.height = 600;



const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
//method returns a drawing context on the canvas, or null
canvas4.width = 600 
canvas4.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
//method returns a drawing context on the canvas, or null
canvas5.width = 600 
canvas5.height = 600;


const grid = 80;  // pixels of movment
let keys = []; // hold which key is pressed
let score = 0;
let collisions_count=0;
let frame = 0;
let game_speed  = 1; // check
let level = 0;
let safe = false;
const particlearray = []; // for dust effect'
const maxparticles = 300;

const ripples_array =[]; //water object

const cars_array = []; //for cars

const logs_array = []; // for turtles 

const frog_color = 'green';


const background_game = new Image();
background_game.src = './images/background.png';
//let background_game = new Image(600, 600);
//background_game.src = './images/frog_game1.jpg';
let direction = 0;

const grass = new Image();
grass.src = './images/grass.png'; 

const collision = new Image();
collision.src = './images/flame.png';

const car = new Image();
car.src = './images/cars.png';

const car1 = new Image();
car1.src = './images/car1.png';

const car2 = new Image();
car2.src = './images/car2.png'

const frog = new Image();
frog.src = './images/frogs.png';

const turtle = new Image();
turtle.src = './images/turtles.png';

const logs = new Image();
logs.src = './images/log.png';

const cars = new Image();
cars.src = './images/cars.png';
let num_cars = 3;

const heart = new Image();
let num_hearts = 3;
heart.src = './images/heart.png';