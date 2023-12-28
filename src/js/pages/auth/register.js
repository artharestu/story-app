import Auth from '../../network/auth';
import CheckUserAuth from './check-user-auth';

const Register = {
  async init() {
    CheckUserAuth.checkLoginState();

    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.querySelector('#registerForm');
    registerForm.addEventListener(
      'submit',
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        registerForm.classList.add('was-validated');
        await this._getRegistered();
      },
      false,
    );
  },

  async _getRegistered() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log('formData');
      console.log(formData);

      this._register(true);
      try {
        const response = await Auth.register({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        this._register(false);

        this._goToLoginPage();
      } catch (error) {
        this._register(false);
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

  _register(status) {
    const registerButton = document.querySelector('#registerbutton');
    const inputEmail = document.querySelector('#validationCustomEmail');
    const inputPassword = document.querySelector('#validationCustomPassword');
    const inputName = document.querySelector('#validationCustomRecordName');
    if (status) {
      inputName.disabled = true;
      inputEmail.disabled = true;
      inputPassword.disabled = true;
      registerButton.innerHTML = `
          <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
          <span role="status">Loading...</span>
        `;
    } else {
      inputName.disabled = false;
      inputEmail.disabled = false;
      inputPassword.disabled = false;
      registerButton.innerHTML = 'Submit';
    }
  },

  _getFormData() {
    const name = document.querySelector('#validationCustomRecordName');
    const email = document.querySelector('#validationCustomEmail');
    const password = document.querySelector('#validationCustomPassword');

    return {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToLoginPage() {
    window.location.href = '/auth/login.html';
  },
};

export default Register;