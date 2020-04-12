function setup() {
createCanvas(600, 600);
noStroke();
}
function draw() {
background(177, 23, 23);
//EARS
fill(1229, 202, 202);
ellipse(175, 300, 30, 40);
ellipse(425, 300, 30, 40);
//NECK
fill(1229, 202, 202);
rect(285, 400, 30, 50);
//HEAD
fill(1229, 202, 202);
ellipse(300, 300, 250, 260);
//HAIR
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
endShape(CLOSE);
//EYELINER/LASHES
fill(1);
triangle(235, 290, 260, 305, 260, 290);
triangle(365, 290, 340, 305, 340, 290);
ellipse(258, 298, 30, 40);
ellipse(342, 298, 30, 40);

//EYES
fill(255);
ellipse(260, 300, 30, 40);
ellipse(340, 300, 30, 40);

fill(137, 139, 177);
ellipse(263, 305, 20, 30);
ellipse(338, 305, 20, 30);

//NOSE
fill(212, 138, 112);
triangle(300, 300, 295, 330, 305, 330);

//EYEBROW 1
fill(68, 39, 29);
beginShape();
vertex(272, 277);
vertex(275, 271);
vertex(250, 270);
vertex(243, 280);
vertex(252, 276);
endShape(CLOSE);
//EYEBROW 2
fill(68, 39, 29);
beginShape();
vertex(328, 277);
vertex(325, 271);
vertex(350, 270);
vertex(357, 280);
vertex(348, 276);
endShape(CLOSE);
//MOUTH
fill(208, 101, 172);
arc(300, 360, 45, 35, 0, radians(180));
ellipse(290, 360, 25, 17);
ellipse(310, 360, 25, 17);
//BODY
fill(1);
ellipse(300, 600, 180, 320);
fill(1229, 202, 202);
triangle(300, 480, 285, 440, 315, 440);
}
