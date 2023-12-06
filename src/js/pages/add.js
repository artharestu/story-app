const Add = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const form = document.getElementsByTagName('form');

    form[0].addEventListener('submit', (event) => {
      event.preventDefault();
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

      form[0].reset();
      console.log(data);
      this._goToDashboardPage();

    })
  },
  _goToDashboardPage() {
    window.location.href = '/';
  },
}

export default Add;