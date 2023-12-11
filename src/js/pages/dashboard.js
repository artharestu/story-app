const Dashboard = {


  async init() {
    await this._initialData();
  },


  async _initialData() {
    const fetchRecords = await fetch('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json');
    const responseRecords = await fetchRecords.json();
    if (responseRecords.error) {
      return;
    }
    this.render(responseRecords.listStory);
  },

  render(listStory) {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };

    document.getElementsByClassName('content')[0].innerHTML = listStory.map((data, i) => {
      const date = new Date(data.createdAt);
      const formattedDate = date.toLocaleString("id-ID", options);
      if (i % 2 == 0) {
        console.log("Pembuka " + i % 3);
        return `
        <div class="row g-0 justify-content-center align-items-center">
          <div class="col-5 card mb-3 border border-0 shadow me-3" id="${data.id}">
            <div class="card-body px-3 py-4">
              <div class="d-flex align-items-center mb-3">
                <img src="${this.randomPhotoProfile()}" 
                class="rounded-circle border border-primary p-1 me-1" alt="${data.name}">
                <div class="d-flex flex-column flex-grow-1 ps-2">
                  <h6 class="card-title mb-0">${data.name}</h6>
                  <div class="d-flex align-items-center mt-0">
                    <small class="text-muted">${formattedDate}</small>
                    <i class="bi bi-globe-asia-australia ms-2"></i>
                  </div>
                </div>
                
              </div>            
              <img src="${data.photoUrl}" class="card-img-top mb-3 rounded w-100" alt="${data.name}">   
              <i class="bi bi-suit-heart me-2"></i>
              <i class="bi bi-chat me-2"></i>
              <i class="bi bi-send me-2"></i>              
              <p class="card-text">${data.description}</p>                          
              <button type="button" class="btn btn-outline-primary w-100" id="edit-${data.id}">Edit</button>
              <button type="button" class="btn btn-outline-danger w-100 mt-2" id="delete-${data.id}">Delete</button>            
            </div>
          </div>
        `}

      else {
        console.log("Penutup " + (i % 3));
        return `
            <div class="col-5 card mb-3 border border-0 shadow" id="${data.id}">
              <div class="card-body px-3 py-4">
                <div class="d-flex align-items-center mb-3">
                  <img src="${this.randomPhotoProfile()}" 
                  class="rounded-circle border border-primary p-1 me-1" alt="${data.name}">
                  <div class="d-flex flex-column flex-grow-1 ps-2">
                    <h6 class="card-title mb-0">${data.name}</h6>
                    <div class="d-flex align-items-center mt-0">
                      <small class="text-muted">${formattedDate}</small>
                      <i class="bi bi-globe-asia-australia ms-1"></i>
                    </div>
                  </div>
                  
                </div>            
                <img src="${data.photoUrl}" class="card-img-top mb-3 rounded w-100" alt="${data.name}">   
                <i class="bi bi-suit-heart me-2"></i>
                <i class="bi bi-chat me-2"></i>
                <i class="bi bi-send me-2"></i>                
                <p class="card-text">${data.description}</p> 
                <button type="button" class="btn btn-outline-primary w-100" id="edit-${data.id}">Edit</button>
                <button type="button" class="btn btn-outline-danger w-100 mt-2" id="delete-${data.id}">Delete</button>
              </div>
            </div> 
          </div>
          `
      }
    }).join('');

    listStory.forEach((data) => {
      document.getElementById("edit-" + data.id).addEventListener('click', (event) => {
        window.location.href = '/edit.html?id=' + data.id;
      })
      document.getElementById("delete-" + data.id).addEventListener('click', (event) => {
        window.location.href = '/delete.html?id=' + data.id;
      })
    })

    document.getElementById('addstory').addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '/add.html';
    });
  },
  randomPhotoProfile() {
    const category = ["animal", "cartoon", "food", "history", "nature", "cat", "dog", "work",
      "movie", "music", "anime", "game", "lion", "elephant", "penguin", "tiger", "panda", "mountains",
      "ocean", "sunset", "forest", "waterfall", "landscape", "beach", "sunrise", "night", "city", "sea", "space"];

    return "https://source.unsplash.com/50x50/?" + category[Math.floor(Math.random() * category.length)];
  }
};

export default Dashboard