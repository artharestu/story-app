import Auth from '../../network/auth';
import Config from '../../config/config';
import Utils from '../../utils/utils';
import CheckUserAuth from './check-user-auth';

const Login = {
  async init() {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const loginForm = document.querySelector('#loginForm');
    loginForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add('was-validated');

        await this._getLogged();
      },
      false,
    );
  },

  async _getLogged() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      this._login(true);

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        console.log(response);
        Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token);

        this._goToDashboardPage();
      } catch (error) {
        this._login(false);
        const errorMessage = document.querySelector('#errormessage');

        if (error.response) {
          errorMessage.innerHTML = "Message: " + error.response.data.message;
        } else if (error.request) {
          console.error(error.request);
        } else {
          console.error('Error:', error.message);
        }
      }
    }
  },

  _getFormData() {
    const email = document.querySelector('#validationCustomRecordEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      email: email.value,
      password: password.value,
    };
  },

  _login(status) {
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

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = '/';
  },
};

export default Login;