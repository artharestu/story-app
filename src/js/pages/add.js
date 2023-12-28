import Transactions from '../network/transactions';
import CheckUserAuth from './auth/check-user-auth';

const Add = {
  init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
  },

  _initialListener() {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      form.classList.add('was-validated');

      const description = document.getElementById('description').value;
      const photoImg = document.querySelector('#photoUrl');
      const photo = photoImg.files[0];

      await this._sendPost({ description, photo })
    })
  },
  _goToDashboardPage() {
    window.location.href = '/';
  },
  async _sendPost(data) {
    try {
      await Transactions.add(data);
      window.alert('New story added successfully');

      this._goToDashboardPage();
    } catch (error) {
      console.error(error);
    }
  },
}

export default Add;