"use strict";
(() => {
    document.querySelector(".navbar").innerHTML = `
        <div class="logo">
            <a href="index.html">MVenture</a>
        </div>
        <ul class="nav-links d-none">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">About Me</a></li>
<!--            <li><a href="#">Portfolio</a></li>-->
            <li><a href="projects.html">Projects</a></li>
            <li><button class="contact-me-btn">Contact Me</button></li>

        </ul>

        <button class="nav-btn">| | |</button>
    
    `
    document.querySelector(".nav-btn").addEventListener('click',()=>{
        document.querySelector('.nav-links').classList.toggle("d-none")

    })


})();
