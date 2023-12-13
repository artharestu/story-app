const Dashboard = {
  init() {
    this._initialData();
  },

  _initialData() {
    const listStory = localStorage.getItem('listStory');
    if (listStory) {
      this.render(JSON.parse(listStory));
    }
  },

  render(listStory) {
    document.getElementsByClassName('content')[0].innerHTML = listStory.map((data, i) => {
      if (i % 2 == 0) {
        return `
          <div class="row g-0 justify-content-center align-items-center">
            <card-dashboard class="col-12 col-md-6 col-lg-5" id="${data.id}" storyname="${data.name}" description="${data.description}"
            createdAt="${data.createdAt}" photoUrl="${data.photoUrl}">
            </card-dashboard>
        `}

      else {
        return `
            <card-dashboard class="col-12 col-md-6 col-lg-5" id="${data.id}" storyname="${data.name}" description="${data.description}"
            createdAt="${data.createdAt}" photoUrl="${data.photoUrl}">
            </card-dashboard>
          </div>
          `
      }
    }).join('');

    document.getElementById('addstory').addEventListener('click', (e) => {
      console.log("click addstory");
      window.location.href = '/add.html';
    });
  },
};

export default Dashboard