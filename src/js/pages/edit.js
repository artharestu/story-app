const edit = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json');
    const responseRecords = await fetchRecords.json();
    if (responseRecords.error) {
      return;
    }
    const editData = responseRecords.listStory.find(data => data.id === this._getTransactionId());
    if (!editData) {
      return;
    }
    document.getElementById('name').value = editData.name;
    document.getElementById('description').value = editData.description;
    document.getElementById('photoUrl').value = editData.photoUrl;

    document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
      event.preventDefault();
      editData.name = document.getElementById('name').value;
      editData.description = document.getElementById('description').value;
      editData.photoUrl = "https://source.unsplash.com/1200x700/?" + document.getElementById('photoUrl').value;
      console.log(editData);
      //this._goToDashboardPage();
    })

    document.getElementById('cancel').addEventListener('click', (event) => {
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
export default edit;