// Import our custom CSS
import '../sass/main.scss';

// Import javascript file as needed
import Dashboard from './pages/dashboard';
import Add from './pages/add';
import Edit from './pages/edit';
import Delete from './pages/delete';

// Import Bootstrap
import * as bootstrap from 'bootstrap';

// Import components
import './components';

const routes = {
  '/': Dashboard,
  '/add.html': Add,
  '/edit.html': Edit,
  '/delete.html': Delete
};

const detectRoute = () => routes[window.location.pathname];

const getData = async () => {
  const fetchRecords = await fetch('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json');
  const responseRecords = await fetchRecords.json();
  localStorage.setItem('listStory', JSON.stringify(responseRecords.listStory))
};

window.addEventListener('DOMContentLoaded', async () => {
  const route = detectRoute();
  const localData = localStorage.getItem('listStory');

  if (!localData) {
    await getData();
  }
  route.init();
});