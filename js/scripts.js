let links = document.getElementsByClassName('menu__link');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('menu__link--active');
    current[0].className = current[0].className.replace(
      ' menu__link--active',
      ''
    );
    this.className += ' menu__link--active';
  });
}

let buttons = document.querySelectorAll(
  '.school-overview__btn, .school-overview__btn-next'
);

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    let targetId = button.getAttribute('href').substring(1);
    let targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth',
    });
  });
});

const likeButtons = document.querySelectorAll('.cuors-like');
const likeCounts = document.querySelectorAll('.like-count');

likeButtons.forEach((likeButton, index) => {
  let numberOfLikes = 0;

  likeButton.addEventListener('click', function () {
    numberOfLikes++;
    likeCounts[index].textContent = `${numberOfLikes} ${
      numberOfLikes === 1 ? 'Like' : 'Likes'
    }`;
  });
});

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container-active');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});
