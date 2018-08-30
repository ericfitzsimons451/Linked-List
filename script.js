var inputWebsite = document.querySelector('#input-website');
var inputUrl = document.querySelector('#input-url');
var inputEnter = document.querySelector('#input-enter');
var cardSection = document.querySelector('.right-side');
var cardReadButton = document.querySelector('.card-read-button');
var cardDeleteButton = document.querySelector('.card-delete-button');

inputWebsite.addEventListener('keyup', checkInputs);
inputUrl.addEventListener('keyup', checkInputs);
inputEnter.addEventListener('click', createWebsiteLink);
cardSection.addEventListener('click', toggleCardRead);
cardSection.addEventListener('click', deleteCard);

inputEnter.disabled = true;

function createWebsiteLink(event) {
  event.preventDefault();
  var newCard = document.createElement('article'); 
  newCard.innerHTML = `<h2 class='card-website-title'>${inputWebsite.value}
                       </h2><hr>
                       <a class="card-url-input" href="https://${inputUrl.
                       value}" target="_blank">${inputUrl.value}</a><hr>
                       <div class="card-footer">
                       <button class="card-read-button" type="button">Read
                       </button>
                       <button class="card-delete-button" type="button">
                       Delete</button></div>`;
  cardSection.prepend(newCard);
  inputWebsite.value = '';
  inputUrl.value = '';
  inputEnter.disabled = true;
};

function toggleCardRead(event) {
  if (event.target.className === 'card-read-button' || 
    event.target.className === 'card-read-button read') {
    event.target.classList.toggle('read');
    event.target.parentNode.parentNode.classList.toggle('card-read');
  }
};

function deleteCard(event) {
  if (event.target.className === 'card-delete-button') {
  event.target.parentNode.parentNode.remove('card-delete-button') };
  };

function checkInputs() {
  if (inputWebsite.value !== '' && inputUrl.value !== '') {
    inputEnter.disabled = false;
  }
};

