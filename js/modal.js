let modal = document.getElementById("myModal");
let imgBox = document.getElementById("imgBox");
let modalImg = document.getElementById("modal-img");
let modalTitle = document.getElementById("title");
let modalYear = document.getElementById("year");
let modalTools = document.getElementById("tools");
let closeButton = document.querySelector(".close");


const galleryItems = document.getElementsByClassName("gallery-item");

for (let i = 0; i < galleryItems.length; i++) {
  let item = galleryItems[i];
  let itemId = item.dataset.id;
  item.addEventListener("click", function() {

    for (let j = 0; j < modalInfo.length; j++) {
      if (modalInfo[j]["id"] == itemId) {
        console.log(modalInfo[j]);
        console.log(modalInfo[j].imgSrc.length)
        imgBox.innerHTML = `<img src="${modalInfo[j].imgSrc}" alt="${modalInfo[j].imgAlt}">`
        modalTitle.innerText = modalInfo[j].imgAlt;
        modalYear.innerText = modalInfo[j].year;
        modalTools.innerText = modalInfo[j].tools;
        break;
      }
    }

    modalWrap.style.display = "flex";
    modal.style.display = "flex";
    modalWrap.style.visibility = "visible";
    modal.style.visibility = "visible";
  })
}

// Add a click listener to the close button
closeButton.addEventListener("click", function() {
  // TODO: Break this out to it's own function
  modal.style.display = "none";
  modalWrap.style.visibility = "hidden";
  modalTitle.innerText = "";
  modalYear.innerText = "";
  modalTools.innerText = "";
});