const navItems = document.getElementById('navbar-items').children;
for (item of navItems) {
    item.addEventListener('click', e => {
        e.preventDefault();
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: document.getElementById(e.target.dataset.target).getBoundingClientRect().top +
                window.scrollY - 20
        });
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

          $navbarBurgers.forEach( el => {
            el.classList.toggle('is-active');
          });
        }
        document.getElementById('navbar-items').classList.toggle('is-active');
    });
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});