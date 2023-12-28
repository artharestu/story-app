// Import our custom CSS
import '../sass/main.scss';

// Import javascript file as needed
import Dashboard from './pages/dashboard';
import Add from './pages/add';

import Login from './pages/auth/login';
import Register from './pages/auth/register';

// Import Bootstrap
import * as bootstrap from 'bootstrap';

// Import components
import './components';

const routes = {
  '/': Dashboard,
  '/add.html': Add,
  '/auth/login.html': Login,
  '/auth/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', () => {
  const route = detectRoute();
  route.init();
});