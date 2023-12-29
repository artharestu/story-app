import Transactions from '../network/transactions';
import CheckUserAuth from './auth/check-user-auth';

const Add = {
  init() {
    CheckUserAuth.checkLoginState();
    this.initialListener();
  },

  initialListener() {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      form.classList.add('was-validated');

      const description = document.getElementById('description').value;
      const photoImg = document.querySelector('#photoUrl');
      const photo = photoImg.files[0];

      await this.sendPost({ description, photo });
    });
  },
  goToDashboardPage() {
    window.location.href = '/';
  },
  async sendPost(data) {
    try {
      await Transactions.add(data);
      this.goToDashboardPage();
    } catch (error) {
      console.log(error);
    }
  },
};
export default Add;
