let r;
let g;
let b;

let col = {
  
  r: 250,
  g: 76,
  b: 206
};


let dot = {
  x: 50,
  y: 50,
  size: 20
};

let extraCanvas;

var earrings = true;
var wink = true;

//states
var state;
var stateStatic=0;         
var stateParty = 1;  
var stateWink = 2;
var stateSleepy = 3;

function setup() {
  // put setup code here

  createCanvas(900,800);
  frameRate(8);
  background(48, 214, 234); //background for the screen
  smooth();
  
  state = stateStatic;
}


function draw() {
	dot.x = random(0, width);
  dot.y = random(0, 350);
  dot.size = random(3, 88);
  col.r = random(240, 59);
  col.g = random(72, 15);
  col.b = random(109, 166);
  fill(col.r, col.g, col.b);
  noStroke();
  // extraCanvas.circle(spot.x, spot.y, spot.size);
  ellipse(dot.x, dot.y, dot.size);
  
  
  //mouse circle
  fill(255, 192, 203, 70);
  noStroke();
  ellipse(mouseX, mouseY, 50);


 if (state == stateParty) {
     drawEarrings(); 
 	}
 else if (state == stateWink) {
 	drawBlush();
 	drawWink();
 	}
else if (state == stateSleepy) {
  	drawSleepy();

  	}else{
  		drawStatic();
  	}
}  	

function drawStatic(){
  // put drawing code here
  //hair
  fill(116, 64, 15);
  rect(250, 250, 390, 390);
  ellipse(445, 310, 406, 440);

  //neck
  fill(236, 179, 124);
  noStroke();
  rect(380,430,150,210);
  
  //body  
  fill(236, 179, 124);
  rect(250, 600, 390,180);
  
  //clothes
  fill(255, 55, 149);
  rect(250, 620, 390,180);
  
  
  //face
  fill(240, 191, 144);
  noStroke();
  ellipse(450,350,300,400);
  fill(116, 64, 15);
  rotate(0.2);
  ellipse(520,98,220,110);
  rotate(-0.2);
  
  //lips
  stroke(226, 61, 106);
  fill(255, 55, 149);
  arc(450, 450, 80, 50, 0, 3.14);
  
  //eyebrows
  
  noStroke();
  fill(164, 92, 24); 
  rect(480,280,60,10);
  fill(164, 92, 24); 
  rect(360,280,60,10);
  //rotate(0.4);
  triangle(360, 280, 360, 290, 320,320);
  //rotate(-0.4);
  triangle(540, 280, 540, 290, 570,320);

  //eyes
  noStroke();
  fill(248, 241, 235);
  ellipse(500,320,30,30);
  fill(22, 12, 2);
  ellipse(500,320,10,10);
  
 
  noStroke();
  fill(248, 241, 235);
  ellipse(390,320,30,30);
  fill(22, 12, 2);
  ellipse(390,320,10,10);
  
  //nose
  fill(229, 158, 90);
  ellipse(458,400,10,10);
  ellipse(440,400,10,10);
  
 ////hairband
 fill(226, 61, 106);

 ellipse(475,150,20,20);
 ellipse(515,155,30,30);
 ellipse(550,170,20,20);
 fill(252, 151, 202);
 ellipse(475,150,10,10);
 ellipse(515,155,20,20);
 ellipse(550,170,10,10);
 fill(255, 253, 253);
 ellipse(515,155,10,10);

 noStroke();
 
}

function drawEarrings() {
	fill(116, 64, 15);
  rect(250, 250, 390, 390);
  ellipse(445, 310, 406, 440);

  //neck
  fill(236, 179, 124);
  noStroke();
  rect(380,430,150,210);
  
  //body  
  fill(236, 179, 124);
  rect(250, 600, 390,180);
  
  //clothes
  fill(255, 55, 149);
  rect(250, 620, 390,180);
  
  
  //face
  fill(240, 191, 144);
  noStroke();
  ellipse(450,350,300,400);
  fill(116, 64, 15);
  rotate(0.2);
  ellipse(520,98,220,110);
  rotate(-0.2);
  
  //lips
  stroke(226, 61, 106);
  fill(255, 55, 149);
  arc(450, 450, 80, 50, 0, 3.14);
  
  //eyebrows
  
  noStroke();
  fill(164, 92, 24); 
  rect(480,280,60,10);
  fill(164, 92, 24); 
  rect(360,280,60,10);
  //rotate(0.4);
  triangle(360, 280, 360, 290, 320,320);
  //rotate(-0.4);
  triangle(540, 280, 540, 290, 570,320);

  //eyes
  noStroke();
  fill(248, 241, 235);
  ellipse(500,320,30,30);
  fill(22, 12, 2);
  ellipse(500,320,10,10);
  
 
  noStroke();
  fill(248, 241, 235);
  ellipse(390,320,30,30);
  fill(22, 12, 2);
  ellipse(390,320,10,10);
  
  //nose
  fill(229, 158, 90);
  ellipse(458,400,10,10);
  ellipse(440,400,10,10);
  
 ////hairband
 fill(226, 61, 106);

 ellipse(475,150,20,20);
 ellipse(515,155,30,30);
 ellipse(550,170,20,20);
 fill(252, 151, 202);
 ellipse(475,150,10,10);
 ellipse(515,155,20,20);
 ellipse(550,170,10,10);
 fill(255, 253, 253);
 ellipse(515,155,10,10);

 	ellipseMode(CENTER);
    strokeWeight(5);
    stroke(248, 221, 73);
    noFill();
    ellipse(304,399,10,110);
    ellipseMode(CENTER);
    strokeWeight(5);
    stroke(248, 221, 73);
    noFill();
    ellipse(600,399,10,110);

 //state 2 mouth outline
  stroke(3,100);
  strokeWeight(4);
  noFill();
  noStroke();

  ellipseMode(CENTER);
  fill(251, 107, 153);
  stroke(245, 87, 137);
  ellipse(360, 380, 70,60);
  ellipse(530, 380, 70, 60);

  noStroke();

}


function drawBlush(){
	fill(116, 64, 15);
  rect(250, 250, 390, 390);
  ellipse(445, 310, 406, 440);

  //neck
  fill(236, 179, 124);
  noStroke();
  rect(380,430,150,210);
  
  //body  
  fill(236, 179, 124);
  rect(250, 600, 390,180);
  
  //clothes
  fill(255, 55, 149);
  rect(250, 620, 390,180);
  
  
  //face
  fill(240, 191, 144);
  noStroke();
  ellipse(450,350,300,400);
  fill(116, 64, 15);
  rotate(0.2);
  ellipse(520,98,220,110);
  rotate(-0.2);
  
  //lips
  stroke(226, 61, 106);
  fill(255, 55, 149);
  arc(450, 450, 80, 50, 0, 3.14);
  
  //eyebrows
  
  noStroke();
  fill(164, 92, 24); 
  rect(480,280,60,10);
  fill(164, 92, 24); 
  rect(360,280,60,10);
  //rotate(0.4);
  triangle(360, 280, 360, 290, 320,320);
  //rotate(-0.4);
  triangle(540, 280, 540, 290, 570,320);

  //eyes
  noStroke();
  fill(248, 241, 235);
  ellipse(500,320,30,30);
  fill(22, 12, 2);
  ellipse(500,320,10,10);
  
 
  noStroke();
  fill(248, 241, 235);
  ellipse(390,320,30,30);
  fill(22, 12, 2);
  ellipse(390,320,10,10);
  
  //nose
  fill(229, 158, 90);
  ellipse(458,400,10,10);
  ellipse(440,400,10,10);
  
 ////hairband
 fill(226, 61, 106);

 ellipse(475,150,20,20);
 ellipse(515,155,30,30);
 ellipse(550,170,20,20);
 fill(252, 151, 202);
 ellipse(475,150,10,10);
 ellipse(515,155,20,20);
 ellipse(550,170,10,10);
 fill(255, 253, 253);
 ellipse(515,155,10,10);

 noStroke();
  
  //blush state 2
  ellipseMode(CENTER);
  fill(251, 107, 153);
  stroke(245, 87, 137);
  ellipse(360, 380, 70,60);
  ellipse(530, 380, 70, 60);
}

function drawWink(){
	//state 3 wink
  fill(116, 64, 15);
  rect(250, 250, 390, 390);
  ellipse(445, 310, 406, 440);
  noStroke();

  //neck
  fill(236, 179, 124);
  noStroke();
  rect(380,430,150,210);
  
  //body  
  fill(236, 179, 124);
  rect(250, 600, 390,180);
  
  //clothes
  fill(255, 55, 149);
  rect(250, 620, 390,180);
  
  
  //face
  fill(240, 191, 144);
  noStroke();
  ellipse(450,350,300,400);
  fill(116, 64, 15);
  rotate(0.2);
  ellipse(520,98,220,110);
  rotate(-0.2);
  
  //lips
  stroke(226, 61, 106);
  fill(255, 55, 149);
  arc(450, 450, 80, 50, 0, 3.14);
  
  //eyebrows
  
  noStroke();
  fill(164, 92, 24); 
  rect(480,280,60,10);
  fill(164, 92, 24); 
  rect(360,280,60,10);
  //rotate(0.4);
  triangle(360, 280, 360, 290, 320,320);
  //rotate(-0.4);
  triangle(540, 280, 540, 290, 570,320);

  //eyes  
  
  fill(248, 241, 235);
  ellipse(390,320,30,30);
  fill(22, 12, 2);
  ellipse(390,320,10,10);
  noStroke();
  
  //nose
  fill(229, 158, 90);
  ellipse(458,400,10,10);
  ellipse(440,400,10,10);
  
 ////hairband
 fill(226, 61, 106);

 ellipse(475,150,20,20);
 ellipse(515,155,30,30);
 ellipse(550,170,20,20);
 fill(252, 151, 202);
 ellipse(475,150,10,10);
 ellipse(515,155,20,20);
 ellipse(550,170,10,10);
 fill(255, 253, 253);
 ellipse(515,155,10,10);
 strokeWeight(5);
 stroke(10);
 noFill();
 arc(510, 320, 40, 20, 0, 3.14);

 noStroke();
 strokeWeight(0.001);

}

function drawSleepy(){  
	fill(116, 64, 15);
  rect(250, 250, 390, 390);
  ellipse(445, 310, 406, 440);

  //neck
  fill(236, 179, 124);
  noStroke();
  rect(380,430,150,210);
  
  //body  
  fill(236, 179, 124);
  rect(250, 600, 390,180);
  
  //clothes
  fill(255, 55, 149);
  rect(250, 620, 390,180);
  
  
  //face
  fill(240, 191, 144);
  noStroke();
  ellipse(450,350,300,400);
  fill(116, 64, 15);
  rotate(0.2);
  ellipse(520,98,220,110);
  rotate(-0.2);
  
  //lips
  stroke(226, 61, 106);
  //fill(255, 55, 149);
  noFill();
  arc(450, 450, 80, 50, 0, 3.14);
  
  //eyebrows
  
  noStroke();
  fill(164, 92, 24); 
  rect(480,280,60,10);
  fill(164, 92, 24); 
  rect(360,280,60,10);
  //rotate(0.4);
  triangle(360, 280, 360, 290, 320,320);
  //rotate(-0.4);
  triangle(540, 280, 540, 290, 570,320);
 
 
  //nose
  fill(229, 158, 90);
  ellipse(458,400,10,10);
  ellipse(440,400,10,10);
  
 ////hairband
 fill(226, 61, 106);

 ellipse(475,150,20,20);
 ellipse(515,155,30,30);
 ellipse(550,170,20,20);
 fill(252, 151, 202);
 ellipse(475,150,10,10);
 ellipse(515,155,20,20);
 ellipse(550,170,10,10);
 fill(255, 253, 253);
 ellipse(515,155,10,10);
 //state sleep
 strokeWeight(5);
 stroke(10);
 noFill();
 arc(510, 320, 40, 20, 0, 3.14);
 arc(390, 320, 40, 20, 0, 3.14)
 noStroke();

}
  

function mousePressed() {
  background(random(225), random(200), random(225));
 
    
}

function keyPressed() {
	if ( key =='1'){
  		state=stateParty;
 		// var earrings = key -  '1';
 	}
	else if(key =='2'){
    	state = stateWink;
  	}
  	else if(key == '3'){
    	state = stateSleepy;
  	}
}

function keyReleased(){
	state=stateStatic;
}