function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
}
function loadVideos() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((response) => response.json())
        .then((data) => displayVideos(data.videos))
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

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    videos.forEach((video) => {
        console.log(video);
        const videoCard = document.createElement("div");

        videoCard.innerHTML = `
        <div class="card bg-base-100">
            <figure class="relative">
              <img class="w-full h-[150px] object-cover"
                src="${video.thumbnail}"
                alt="" />
                <span class="absolute bottom-2 right-2 text-white bg-black text-sm rounded px-2">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
             <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
             </div>
             <div class="intro">
                <h2 class="text-sm font-semibold">${video.title}</h2>
                <p class="flex text-xs text-gray-500 gap-1">${video.authors[0].profile_name}
                   <img class="w-4 h-4" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt="">
                </p>
                <p class="text-xs text-gray-500">${video.others.views} Views</p>
             </div>
            </div>
          </div>
        `;

        videoContainer.append(videoCard)
    })
};

loadCategories();
loadVideos();