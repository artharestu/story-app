// Import our custom CSS
import '../sass/main.scss';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';

let listStory = [];
const editButton = (id) => {
  const data = listStory.find(data => data.id === id);
  if (!data) return;
  const card = document.getElementById(id);
  card.innerHTML = `
    <form
      class="d-flex flex-column align-items-center justify-content-center w-100 mb-3 p-3 shadow rounded border border-1">
      <input class="form-control form-control-lg w-100 mb-3" type="text" placeholder="Your Name" 
      id="name" value="${data.name}"/>
      <input class="form-control form-control-lg w-100 mb-3" type="text" id="photoUrl"
        placeholder="Try 'nature', 'food', 'history', 'animal'..." value="${data.photoUrl}"/>
      <textarea class="form-control form-control-lg w-100 mb-3" type="text" placeholder="Your story..."
        id="description" rows="3">${data.description}</textarea>
      <button class="btn btn-outline-primary w-100" type="submit">
        Edit
      </button>
      <button class="btn btn-outline-danger w-100 mt-3" type="button">
        Cancel
      </button>
    </form>
  `;
}
const getData = () => {
  fetch('https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json')
    .then(response => response.json())
    .then(json => {
      if (json.error) {
        document.getElementsByTagName('main')[0].innerHTML = "Data not found";
        return;
      }
      listStory.push(...json.listStory);
      console.log(listStory);
      renderContent();
    })
}

document.addEventListener('DOMContentLoaded', getData());

const form = document.getElementsByTagName('form');

form[0].addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const description = document.getElementById('description').value;
  const photoUrl = "https://source.unsplash.com/1200x700/?" + document.getElementById('photoUrl').value;
  const id = "story-" + Date.now();
  const createdAt = new Date().toISOString();
  const data = {
    id,
    name,
    description,
    photoUrl,
    createdAt,
  }
  listStory.unshift(data);
  console.log(listStory);
  form[0].reset();
  renderContent();
})

const renderContent = () => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  };
  document.getElementsByClassName('content')[0].innerHTML = listStory.map(data => {
    const date = new Date(data.createdAt);
    const formattedDate = date.toLocaleString("id-ID", options);
    return `        
        <div class="card mb-3 border border-0 shadow w-50 mx-auto" id="${data.id}">
          <div class="card-body p-5">
            <div class="d-flex align-items-center mb-3">
              <img src="${randomPhotoProfile()}" 
              class="rounded-circle border border-primary p-1 me-1" alt="${data.name}">
              <div class="d-flex flex-column flex-grow-1">
                <h5 class="card-title">${data.name}</h5>
                <div class="d-flex align-items-center">
                  <small class="text-muted">${formattedDate}</small>
                  <i class="bi bi-globe-asia-australia ms-2"></i>
                </div>
              </div>
              
            </div>            
            <img src="${data.photoUrl}" class="card-img-top mb-3 rounded w-100" alt="${data.name}">   
            <i class="bi bi-suit-heart me-2"></i>
            <i class="bi bi-chat me-2"></i>
            <i class="bi bi-send me-2"></i>
            <p class="card-text">${data.description}</p>            
            <button type="button" class="btn btn-outline-primary w-25" id="edit-${data.id}">Edit</button>
            <button type="button" class="btn btn-outline-danger w-25" id="delete-${data.id}">Delete</button>            
          </div>
        </div>
        `
  }).join('');
  listStory.forEach((data) => {
    document.getElementById("edit-" + data.id).addEventListener('click', (event) => {
      event.preventDefault();
      editButton(data.id);
    })
    document.getElementById("delete-" + data.id).addEventListener('click', (event) => {
      event.preventDefault();
      deleteButton(data.id);
    })
  })
}

const category = ["animal", "cartoon", "food", "history", "nature", "cat", "dog", "work",
  "movie", "music", "anime", "game", "lion", "elephant", "penguin", "tiger", "panda", "mountains",
  "ocean", "sunset", "forest", "waterfall", "landscape", "beach", "sunrise", "night", "city", "sea", "space"];

const randomPhotoProfile = () => {
  return "https://source.unsplash.com/50x50/?" + category[Math.floor(Math.random() * category.length)];
}

const deleteButton = (id) => {
  listStory = listStory.filter(data => data.id !== id);
  renderContent();
}