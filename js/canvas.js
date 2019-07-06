'use strict';

const canvas  = document.getElementById('canvas');

canvas.width =  window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c. strokeStyle = 'rgb(37, 97, 194)';
        c.stroke();
        // c.fill();  
    }
    
    this.update = function() {
        //  a circle is bouncing off the top  left right and bottom of our screen
        if ( this.x + this.radius > innerWidth || this.x - this.radius < 0 )  {
            this.dx = -this.dx;   // bounce from the right and left-hand sides the screen
                    
        }
        if ( this.y + this.radius > innerHeight || this.y - this.radius < 0 )  {
            this.dy = -this.dy; // bounce  from the bottom to top the screen
        }  
                  
        this.x += this.dx; // change the direction of the circle from left to right
        this.y += this.dy;
        this.draw();      
    }

}

const circleArr = [];

for (let index = 0; index < 89; index++) {

    const radius = 55;
    let x = Math.random() * (innerWidth - radius * 2)  + radius; // responsive ( innerWidth - radius * 2 )  + radius
    let y = Math.random() * (innerHeight - radius * 2) + radius
    let dx = ( Math.random() - 0.5 );  // x - velocity coordinate  
    let dy = ( Math.random() - 0.5 ); // y - velocity coordinate  
    
    circleArr.push(new Circle(x, y, dx, dy, radius)); 
}


function animate() {

    requestAnimationFrame(animate);
    c.clearRect( 0, 0, innerWidth, innerHeight); // clearing the Canvas

    // to get these drawn on the screen
    for (let index = 0; index < circleArr.length; index++) {
        circleArr[index].update(); // the next circle call update
        
    }
};

animate();
