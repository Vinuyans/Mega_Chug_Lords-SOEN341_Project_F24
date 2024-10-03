import React from 'react';
import './styles.css';
import video from '../assets/video.webm'

function Welcome() {
  return (
    <div className="page">
      
      <div className="vid">
      <video src={video} type="video/webm" atl="background video" autoPlay loop muted/>
      </div>
      
      

      <div className="content">
        <h1>ReviewMate</h1>
        <div className="button-container">
          <button className="button">Login as a Teacher</button>
          <button className="button">Login as a Student</button>
        </div>

        <p className="create-link"><a href="#" className="link">Don't have an account? Create one</a></p>
      </div>
    </div>
  );
}

export default Welcome;


/*
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content = "width=device-width, initial-scale=1.0">
        <title>ReviewMate</title>
        <link rel="stylesheet" href="/static/styles.css">
    </head>

    <body>
        <div class="page">

            <video autoplay loop muted plays-inline class="vid">
                <source src="/static/video.mp4" type="video/mp4">
            </video>


            <nav> <!--Upper nav: will have to create separate pages for the About and How to Use sections-->
                <img src="/static/reviewmatelogo.jpg" class="logo">
                <ul>
                    <li><a href = "#">ABOUT</a></li>
                    <li><a href="#">HOW TO USE</a></li>
                </ul>
            </nav>
            <div class="content">
                <h1>ReviewMate</h1>
                <div class="button-container"> <!--If the person has an account they can identify themselves either as a Teacher or as a Student and log in-->
                    <button class="button">Login as a Teacher</button>
                    <button class="button">Login as a Student</button>
                </div>

               
                <!--This will lead the user to either create a Teacher account or a Student Account-->
                <p class="create-link"><a href="#" class="link">Don't have an account? Create one</a></p>

                
            </div>
        </div>
    </body>
</html>
*/