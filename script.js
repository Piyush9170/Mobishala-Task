fetch('https://api.themoviedb.org/3/list/1?api_key=32464b4e2879d0f036d553e9f966674c&language=en-US')
.then(response => {
    if (!response.ok) {
        throw new Error('Unexpected Network response');
    }
    return response.json();
})
.then((data) => {
    let count = 0;
    let res=``
    console.log(data.items)
    while (count < data.items.length) {
        res+=`<div class="col-md-3 mt-4">
        <div class="card bg-dark" style="width: 17rem;" >
            <img class="card-img-top" src="https://image.tmdb.org/t/p/w500${data.items[count].poster_path}" alt="Card image cap" >
            <div class="card-body">
              <h5 class="card-title text-light">${data.items[count].original_title}</h5>
              <p class="text-light"><i class="fas fa-star" style="color:yellow"></i>
              <i class="fas fa-star" style="color:yellow"></i>
              <i class="fas fa-star" style="color:yellow"></i>
              <i class="fas fa-star" style="color:yellow"></i>
              <i class="fas fa-star" style="color:lightgrey"></i>
               4/5
              </p>
              <p class="card-text text-light">Language: ${data.items[count].original_language}</p>
              <p class="card-text text-light">Release Date: ${data.items[count].release_date}</p>
              <a href="movie.html?id=${data.items[count].id}" class="btn btn-warning">View Details</a>
            </div>
          </div>
    </div>`
    count+=1;
    }
    $('#movielist').html(res);

});
