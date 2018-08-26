var inputWebsite = document.querySelector('#input-website');
var inputUrl = document.querySelector('#input-url');
var inputEnter = document.querySelector('#input-enter');
var cardSection = document.querySelector('.right-side');
var cardReadButton = document.querySelector('.card-read-button');


inputEnter.addEventListener('click', createWebsiteLink);
cardReadButton.addEventListener('click', toggleCardRead);


function createWebsiteLink(event) {
  event.preventDefault();
  var newCard = document.createElement('article'); 
  newCard.innerHTML = `<h2 class='card-website-title'>${inputWebsite.value}</h2>
                        <p class="card-url-input">${inputUrl.value}</p>
                        <footer class="card-footer">
                        <button class="card-read-button" type="button">Read</button>
                        <button class="card-delete-button" type="button">Delete</button></footer>`;
  cardSection.prepend(newCard);
};

function toggleCardRead() {
	cardReadButton.classList.toggle('read');
}



