function setup() {
createCanvas(600, 600);
noStroke();
}


function draw() {
background(177, 23, 23)
ellipse(300, 300, 250, 260)
fill(81, 8, 8);
beginShape();
vertex(220, 200);
vertex(260, 140);
vertex(400, 140);
vertex(450, 275);
vertex(425, 320);
vertex(410, 260);
endShape(CLOSE);
 

beginShape();
vertex(220, 200);
vertex(185, 225);
vertex(170, 300);
endShape();
fill(229, 202, 202);
}
