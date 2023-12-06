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
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    document.getElementsByClassName('content')[0].innerHTML = listStory.map(data => {
      const date = new Date(data.createdAt);
      const formattedDate = date.toLocaleString("id-ID", options);
      return `        
        <div class="card mb-3 border border-0 shadow w-50 mx-auto" id="${data.id}">
          <div class="card-body p-5">
            <div class="d-flex align-items-center mb-3">
              <img src="${this.randomPhotoProfile()}" 
              class="rounded-circle border border-primary p-1 me-1" alt="${data.name}">
              <div class="d-flex flex-column flex-grow-1">
                <h5 class="card-title">${data.name}</h5>
                <div class="d-flex align-items-center">
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
            <button type="button" class="btn btn-outline-primary w-25" id="edit-${data.id}">Edit</button>
            <button type="button" class="btn btn-outline-danger w-25" id="delete-${data.id}">Delete</button>            
          </div>
        </div>
        `
    }).join('');
    listStory.forEach((data) => {
      document.getElementById("edit-" + data.id).addEventListener('click', (event) => {
        window.location.href = '/edit.html?id=' + data.id;
      })
      document.getElementById("delete-" + data.id).addEventListener('click', (event) => {
        window.location.href = '/delete.html?id=' + data.id;
      })
    })
  },
  randomPhotoProfile() {
    const category = ["animal", "cartoon", "food", "history", "nature", "cat", "dog", "work",
      "movie", "music", "anime", "game", "lion", "elephant", "penguin", "tiger", "panda", "mountains",
      "ocean", "sunset", "forest", "waterfall", "landscape", "beach", "sunrise", "night", "city", "sea", "space"];

    return "https://source.unsplash.com/50x50/?" + category[Math.floor(Math.random() * category.length)];
  }
};

export default Dashboard