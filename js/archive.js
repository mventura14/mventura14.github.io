

   (() => {
"use strict"

      const openButton = document.querySelector("[data-open-modal]")
      const closeButton = document.querySelector("[data-close-modal]")
      const modal = document.querySelector("[data-modal]")
      const previewFrame = modal.querySelector('#previewModal')
      const allCards = document.querySelectorAll('.proj-card')


      closeButton.addEventListener("click", () => {
         modal.close();
      })

      modal.addEventListener("click", (e) => { closeDialog(e) })


      const projectCardArr = document.querySelectorAll(".card-cont .proj-card")

      projectCardArr.forEach(card => {
         card.addEventListener("click", () => {
            console.log("clicked")
            modal.showModal()
         })
      })

      allCards[0].addEventListener('click', ()=>{
         previewFrame.src = 'archive/components/comp-01/component02.html'
      })
      


   })();



