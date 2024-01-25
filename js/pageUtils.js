"use strict";
(() => {
    document.querySelector(".navbar").innerHTML = `
    <div class="wrapper">
    <div class="logo-container">
        <a href="#">
            <img src="" alt="">
        </a>
    </div>
    <ul class="nav-menu">
        <li><a href="index.html">Home</a></li>
        
        <li><a href="archive.html">Archive</a></li>
       <li><a href="#">About</a></li>

        <li><a href="#">Contact Me</a></li>
    </ul>

    <label for="nav-toggle" class="nav-toggle"></label>
    <input type="checkbox" id="nav-toggle">
</div>
    
    `
    // document.querySelector(".nav-btn").addEventListener('click',()=>{
    //     document.querySelector('.nav-links').classList.toggle("d-none")

    // })


})();

function closeDialog(e) {
    const dialogDimensions = e.currentTarget.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        e.currentTarget.close()
    }
}