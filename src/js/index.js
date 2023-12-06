// Import our custom CSS
import '../sass/main.scss';

// Import javascript file as needed
import Dashboard from './pages/dashboard';
import Add from './pages/add';
import Edit from './pages/edit';
import Delete from './pages/delete';

import * as bootstrap from 'bootstrap';

const routes = {
  '/': Dashboard,
  '/add.html': Add,
  '/edit.html': Edit,
  '/delete.html': Delete
};

const detectRoute = () => routes[window.location.pathname];

window.addEventListener('DOMContentLoaded', async () => {
  const route = detectRoute();
  route.init();
});