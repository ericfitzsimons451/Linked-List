var inputWebsite = document.querySelector('#input-website');
var inputUrl = document.querySelector('#input-url');
var inputEnter = document.querySelector('#input-enter');
var cardSection = document.querySelector('.right-side')


inputEnter.addEventListener('click', createWebsiteLink);

function createWebsiteLink(event) {
  event.preventDefault();
  var newCard = document.createElement('article'); 
  newCard.innerHTML = `<h2 id='input-website'>${inputWebsite.value}</h2>
                        <p class="card-url-input">${inputUrl.value}</p>
                        <footer class="card-footer">
                        <p class="card-read-button">Read</p>
                        <p class="card-delete-button">Delete</p></footer>`;
  cardSection.append(newCard);
};

