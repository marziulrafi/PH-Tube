function loadCategories () {
    fetch(" https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>displayCategories(data.categories))
}

function displayCategories(categories) {
   const categoryContainer = document.getElementById("category");

   for (let cate of categories) {
    console.log(cate);

    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML =
    `
    <button class = "btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cate.category}</button>
    `;

    categoryContainer.append(categoryDiv)
   }
}
loadCategories();