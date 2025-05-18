const categories=document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
// const text = querySelector("h2")

categories.forEach(item => {
    const text=item.querySelector("h2").textContent;
    const count=item.querySelectorAll("ul li").length;
    console.log(`Category: ${text}`);
    console.log(`Elements: ${count}`)
    
  });

console.log(categories)

