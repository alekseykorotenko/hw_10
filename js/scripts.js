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
