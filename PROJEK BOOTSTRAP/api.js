fetch('berita2.json')
      .then(response => response.json())
      .then(data => {
        const beritaContainer = document.getElementById('news-container');
        data.berita.forEach(berita => {
          const card = `
            
              <div class="card shadow-sm">
                <img class="bd-placeholder-img card-img-top" height="225" width="100%" src="${berita.thumbnail}" alt="${berita.title}">
                <div class="card-body">
                  <h5 class="card-title">${berita.title}</h5>
                  <p class="card-text">${berita.description}</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
              </div>
          `;
          beritaContainer.innerHTML += card;
        });
      })
      .catch(error => {
        console.error('Terjadi kesalahan:', error);
      });

// function getApiData() {
//   fetch('https://api.example.com/data') // Ganti dengan URL API yang sesuai
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data); // Proses data yang diterima dari API
//     })
//     .catch(error => {
//       console.error('There has been a problem with your fetch operation:', error);
//     });
// }