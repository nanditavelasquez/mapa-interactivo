document.addEventListener("DOMContentLoaded", function () {
  const livingRoom = document.getElementById("living-room");
  const kitchen = document.getElementById("kitchen");
  const bathroom = document.getElementById("bath-room");
  const room = document.getElementById("room");
  const imageModal = document.getElementById("image-modal");
  const modalImage = document.getElementById("modal-image");
  const closeModal = document.getElementById("close-modal");

  livingRoom.addEventListener("click", function () {
    modalImage.src = "img/sala.jpg"; // Ruta de la imagen de la sala
    imageModal.style.display = "block";
  });

  kitchen.addEventListener("click", function () {
    modalImage.src = "img/cocina.jpg"; // Ruta de la imagen de la cocina
    imageModal.style.display = "block";
  });

  bathroom.addEventListener("click", function () {
    modalImage.src = "img/baño.jpg"; // Ruta de la imagen del baño
    imageModal.style.display = "block";
  });
  room.addEventListener("click", function () {
    modalImage.src = "img/habitación.jpg"; // Ruta de la imagen de la sala
    imageModal.style.display = "block";
  });
  closeModal.addEventListener("click", function () {
    imageModal.style.display = "none";
  });
});