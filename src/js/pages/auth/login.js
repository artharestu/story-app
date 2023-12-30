import Auth from '../../network/auth';
import Config from '../../config/config';
import Utils from '../../utils/utils';
import CheckUserAuth from './check-user-auth';

const Login = {
  init() {
    CheckUserAuth.checkLoginState();

    this.initialListener();
  },

  initialListener() {
    const form = document.querySelector('form');
    const inputPassword = document.getElementById('validationCustomPassword');
    const invalidFeedback = document.querySelector('.invalid-feedback-password');
    const inputEmail = document.getElementById('validationCustomRecordEmail');
    const invalidFeedbackEmail = document.querySelector('.invalid-feedback-email');

    form.addEventListener(
      'submit',
      async (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        let isValidEmailAddress = false;
        let isValidPassword = false;

        if (inputPassword.value === '') {
          invalidFeedback.textContent = invalidFeedback.getAttribute('data-error-empty');
          inputPassword.setCustomValidity('Password cannot be empty');
        } else if (inputPassword.value.length < 8) {
          invalidFeedback.textContent = invalidFeedback.getAttribute('data-error-length');
          inputPassword.setCustomValidity('Password must be at least 8 characters');
        } else {
          invalidFeedback.textContent = '';
          inputPassword.setCustomValidity('');
          isValidPassword = true;
        }

        if (inputEmail.value === '') {
          invalidFeedbackEmail.textContent = 'Email cannot be empty';
          inputEmail.setCustomValidity('Email cannot be empty');
        } else if (!this.isValidEmail(inputEmail.value)) {
          invalidFeedbackEmail.textContent = invalidFeedbackEmail.getAttribute('data-error-email');
          inputEmail.setCustomValidity('Invalid email address');
        } else {
          invalidFeedbackEmail.textContent = '';
          inputEmail.setCustomValidity('');
          isValidEmailAddress = true;
        }

        if (isValidEmailAddress && isValidPassword) {
          await this.getLogged();
        }

        form.classList.add('was-validated');
      },
      false,
    );

    const viewPassword = document.querySelector('#viewpassword');
    viewPassword.addEventListener(
      'click',
      () => {
        if (inputPassword.type === 'password') {
          inputPassword.type = 'text';
          viewPassword.innerHTML = '<i class="bi bi-eye"></i>';
        } else {
          inputPassword.type = 'password';
          viewPassword.innerHTML = '<i class="bi bi-eye-slash"></i>';
        }
      },
    );
  },

  isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },

  async getLogged() {
    const formData = this.getFormData();

    if (this.validateFormData({ ...formData })) {
      this.login(true);

      try {
        const response = await Auth.login({
          email: formData.email,
          password: formData.password,
        });
        console.log(response.data);
        Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.loginResult.token);

        this.goToDashboardPage();
      } catch (error) {
        console.log(error);
        this.login(false);
        const errorMessage = document.querySelector('#errormessage');
        if (error.response) {
          errorMessage.innerHTML = 'Email or password is incorrect!';
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
