const deleteData = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json');
    const responseRecords = await fetchRecords.json();
    if (responseRecords.error) {
      return;
    }
    const deleteData = responseRecords.listStory.find(data => data.id === this._getTransactionId());
    if (!deleteData) {
      return;
    }

    const profile = document.getElementById('profile');
    profile.setAttribute('src', this._randomPhotoProfile());
    profile.setAttribute('alt', deleteData.name);

    document.getElementById('name').innerHTML = deleteData.name;
    document.getElementById('description').innerHTML = deleteData.description;
    document.getElementById('date').innerHTML = deleteData.createdAt;

    const image = document.getElementById('image');
    image.setAttribute('src', deleteData.photoUrl);
    image.setAttribute('alt', deleteData.name);

    document.getElementById('deletebutton').addEventListener('click', (event) => {
      event.preventDefault();
      console.log(deleteData);
      //this._goToDashboardPage();
    })
    document.getElementById('cancelbutton').addEventListener('click', (event) => {
      this._goToDashboardPage();
    })
  },
  _randomPhotoProfile() {
    const category = ["animal", "cartoon", "food", "history", "nature", "cat", "dog", "work",
      "movie", "music", "anime", "game", "lion", "elephant", "penguin", "tiger", "panda", "mountains",
      "ocean", "sunset", "forest", "waterfall", "landscape", "beach", "sunrise", "night", "city", "sea", "space"];

    return "https://source.unsplash.com/50x50/?" + category[Math.floor(Math.random() * category.length)];
  },
  _getTransactionId() {
    const searchParamEdit = new URLSearchParams(window.location.search);
    return searchParamEdit.has('id') ? searchParamEdit.get('id') : null;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
}
export default deleteData;