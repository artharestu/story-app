import CheckUserAuth from './auth/check-user-auth';
import Transactions from '../network/transactions';

const Dashboard = {
  init() {
    CheckUserAuth.checkLoginState();

    this._initialData();
  },

  async _initialData() {
    const listStory = await Transactions.getAll();
    this.render(listStory.data.listStory);
  },

  render(listStory) {
    const content = document.getElementsByClassName('content')[0];
    if (listStory.length == 0) {
      content.innerHTML = `<dashboard-placeholder></dashboard-placeholder>`;
      return;
    }
    content.innerHTML += listStory.map((data, i) => {
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