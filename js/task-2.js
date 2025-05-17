const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];


const gallery =document.querySelector(".gallery");
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "16px";


function mass(arr) {
  return arr.map(image =>`<li class="item-img"><img src="${image.url}" alt="${image.alt}" width=300/></li>`).join("");
}
console.log(gallery);
gallery.insertAdjacentHTML("beforeend", mass(images));

// Напиши скрипт для створення галереї зображень на основі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Створена й додана в DOM галерея із шести зображень
// Галерея додана у список ul.gallery і являє собою 6 елементів <li>, в які вкладені елементи <img>
// Для створення елементів <img> використані дані з масиву обєктів images
// Усі елементи галереї додані в DOM за одну операцію додавання
// Є мінімальне оформлення галереї флексбоксами через CSS класи