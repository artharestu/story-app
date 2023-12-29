import Auth from '../../network/auth';
import Config from '../../config/config';
import Utils from '../../utils/utils';
import CheckUserAuth from './check-user-auth';

const Login = {
  async init() {
    CheckUserAuth.checkLoginState();

    this.initialListener();
  },

  initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');

        await this.getLogged();
      },
      false,
    );

    const viewPassword = document.querySelector('#viewpassword');
    viewPassword.addEventListener(
      'click',
      () => {
        const inputPassword = document.querySelector('#validationCustomPassword');
        if (inputPassword.type === 'password') {
          inputPassword.type = 'text';
          viewPassword.innerHTML = '<i class="bi bi-eye"></i>';
        } else {
          inputPassword.type = 'password';
          viewPassword.innerHTML = '<i class="bi bi-eye-slash"></i>';
        }
      },
    );

    const inputPassword = document.getElementById('validationCustomPassword');
    if (inputPassword.value === '') {
      inputPassword.setCustomValidity('Password cannot be empty');
    } else if (inputPassword.value.length < 8) {
      inputPassword.setCustomValidity('Password must be at least 8 characters');
    } else {
      inputPassword.setCustomValidity('');
    }
  },

  async getLogged() {
    const formData = this.getFormData();

    if (this.validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      this.login(true);

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        console.log(response);
        Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token);

        this.goToDashboardPage();
      } catch (error) {
        this.login(false);
        const errorMessage = document.querySelector('#errormessage');

        if (error.response) {
          errorMessage.innerHTML = `Message: ${error.response.data.message}`;
        } else if (error.request) {
          console.error(error.request);
        } else {
          console.error('Error:', error.message);
        }
      }
    }
  },

  getFormData() {
    const email = document.querySelector('#validationCustomRecordEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      email: email.value,
      password: password.value,
    };
  },

  login(status) {
    const loginButton = document.querySelector('#loginbutton');
    const inputEmail = document.querySelector('#validationCustomRecordEmail');
    const inputPassword = document.querySelector('#validationCustomPassword');
    if (status) {
      inputEmail.disabled = true;
      inputPassword.disabled = true;
      loginButton.disabled = true;
      loginButton.innerHTML = `
          <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
          <span role="status">Loading...</span>
        `;
    } else {
      inputEmail.disabled = false;
      inputPassword.disabled = false;
      loginButton.disabled = false;
      loginButton.innerHTML = 'Submit';
    }
  },

  validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  goToDashboardPage() {
    window.location.href = '/';
  },
};
export default Login;
