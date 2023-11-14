import React, { useState, useEffect, useRef } from 'react';

let circleIndicatorFunc = (assignmentsCompleted) => {
       // Get the canvas element and its 2d context
       const canvas = document.getElementById('spinningCanvas');
       const ctx = canvas.getContext('2d');
   
       // Load the image
       const image = new Image();
       image.src = 'public/badges10assignmentssubmitted.png'; // Replace with the path to your image
   
       // Initial rotation angle
       let angle = 0;
   
       // Function to draw and rotate the image
       function draw() {
         // Clear the canvas
         ctx.clearRect(0, 0, canvas.width, canvas.height);
   
         // Save the current state of the context
         ctx.save();
   
         // Translate to the center of the canvas
         ctx.translate(canvas.width / 2, canvas.height / 2);
   
         // Rotate the image
         ctx.rotate(0.25 * Math.sin((angle * Math.PI) / 180));
   
               // Set the size of the image (scaled to 50% of the original size)
        let scaleFactor = Math.max(0, Math.min(-8 / Math.pow(500,2) * angle * (angle - 500), 1));
        let scaledWidth = image.width * scaleFactor;
        let scaledHeight = image.height * scaleFactor;

         // Draw the image at its center
         ctx.drawImage(image, -scaledWidth / 2, -scaledHeight / 2, scaledWidth, scaledHeight);
   
         // Restore the previous state of the context
         ctx.restore();
   
         // Increment the rotation angle
         angle += assignmentsCompleted == 10 ? 1 : 0;

         if (angle >= 500) {
            setCanvasSize(1, 1);
         }
   
         // Request the next animation frame
         requestAnimationFrame(draw);
       }
   
           // Function to set the canvas size
    function setCanvasSize(width, height) {
        canvas.width = width;
        canvas.height = height;
      }

       // Ensure the image is loaded before starting the animation
       image.onload = function () {
         // Start the animation
         draw();
       };
}

export default function ClassStatsModule(props) {
    useEffect(() => circleIndicatorFunc(props.assignments));

    return (
        <div className="ClassStatsModuleContainer ClassPage-Container">
            <h3>Class Stats</h3>
            <p>Completed Assignments: <b>{props.assignments || '0'}</b></p>
            <p>Completed Quizzes: <b>{props.quizzes || '0'}</b></p>
            <canvas id="spinningCanvas" width="800" height="800" style={{position: 'absolute', top: 'calc(50% - 400px)', left: 'calc(50% - 400px)', display: (props.assignments != 10 ? 'none' : 'block')}}></canvas>
        </div>
    )
}
