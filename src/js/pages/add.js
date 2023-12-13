const Add = {
  async init() {
    await this._initialLocalData();
    this._initialListener();
  },

  _initialListener() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
      const name = document.getElementById('name').value;
      const description = document.getElementById('description').value;
      const photoUrl = "https://source.unsplash.com/1200x700/?" + document.getElementById('photoUrl').value;
      const id = "story-" + Date.now();
      const createdAt = new Date().toISOString();
      const data = {
        id,
        name,
        description,
        photoUrl,
        createdAt,
      }
      event.preventDefault();

      const listStory = this._getLocalData();
      listStory.push(data);
      this._setLocalData(listStory);

      if (form.checkValidity()) {
        this._goToDashboardPage();
      }
    })
  },
  _goToDashboardPage() {
    window.location.href = '/';
  },

  async _initialLocalData() {
    const localData = localStorage.getItem('listStory');
    if (!localData) {
      const fetchRecords = await fetch('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json');
      const responseRecords = await fetchRecords.json();
      localStorage.setItem('listStory', JSON.stringify(responseRecords.listStory))
    }
  },

  _getLocalData() {
    let localData = localStorage.getItem('listStory');
    return JSON.parse(localData);
  },
  _setLocalData(data) {
    localStorage.setItem('listStory', JSON.stringify(data));
  }
}

export default Add;