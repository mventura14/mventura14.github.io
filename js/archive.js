   const openButton = document.querySelector("[data-open-modal]")
   const closeButton = document.querySelector("[data-close-modal]")
   const modal = document.querySelector("[data-modal]")

   openButton.addEventListener("click", ()=>{
    modal.showModal();
   })

   closeButton.addEventListener("click", ()=>{
    modal.close();
   })

   modal.addEventListener("click",(e) => {closeDialog(e)} )