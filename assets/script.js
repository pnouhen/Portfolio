const slides = [
  {
    image: "slide1.jpg",
    title: "La capoeira",
    text: "Développer ma capacité d'improvisation."
  },
  {
    image: "slide2.jpg",
    title: "Le crossfit",
    text: "Repousser mes limites."
  },
  {
    image: "slide3.jpg",
    title: "La batterie",
    text: "Développer mon sens du rythme et ma créativité"
  },
  {
    image: "slide4.jpg",
    title: " Pratique d'un sport saisonnier :",
    text: "Plongée sous-marine, surf et ski."
  },
];
 // Elements
  // Définir les éléments
  const carrouselImage = document.querySelector('#carrousel img')
  const carrouselH3 = document.querySelector("#carrousel h3");
  const carrouselp = document.querySelector("#carrousel p");
  const dots = document.querySelectorAll(".dot");
  console.log(carrouselImage)
// Définir l'index initial
let index = 0;

// Slide suivante
function slide(index) {
  carrouselImage.src = `./assets/Images/slide/${slides[index].image}`;
  carrouselH3.innerHTML = slides[index].title;
  carrouselp.innerHTML = slides[index].text;
  for(let i = 0 ; i < slides.length; i++){
    dots[i].classList.remove("dot_selected")
  }
  dots[index].classList.add("dot_selected");
}

// Click Right
const arrowRight = document.getElementById("arrow_right");
arrowRight.addEventListener("click", () => {
  index = (index + 1)%slides.length
  slide(index);
});

// Click Left
const arrowLeft = document.getElementById("arrow_left");
arrowLeft.addEventListener("click", () => {
  index = (index - 1 + slides.length)%slides.length
  slide(index);
});
