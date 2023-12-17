const deleteData = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const localData = JSON.parse(localStorage.getItem('listStory'));
    if (!localData) {
      const fetchRecords = await fetch('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json');
      const responseRecords = await fetchRecords.json();
      localStorage.setItem('listStory', JSON.stringify(responseRecords.listStory));
      localData = localStorage.getItem('listStory');
    }
    const deleteData = localData.find(data => data.id === this._getTransactionId());
    if (!deleteData) {
      return;
    }

    document.getElementById('name').innerHTML = deleteData.name;
    document.getElementById('description').innerHTML = deleteData.description;

    const createdAt = document.querySelector('formatted-date');
    createdAt.setAttribute('createdAt', deleteData.createdAt);

    const image = document.getElementById('image');
    image.setAttribute('src', deleteData.photoUrl);
    image.setAttribute('alt', deleteData.name);

    document.getElementById('deletebutton').addEventListener('click', (event) => {
      event.preventDefault();
      localData.splice(localData.indexOf(deleteData), 1);
      localStorage.setItem('listStory', JSON.stringify(localData));
      this._goToDashboardPage();
    })
    document.getElementById('cancelbutton').addEventListener('click', (event) => {
      this._goToDashboardPage();
    })
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