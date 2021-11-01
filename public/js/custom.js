const navItems = document.getElementById('navbar').firstElementChild.children;
for (item of navItems) {
    item.addEventListener('click', e => {
        e.preventDefault();
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: document.getElementById(e.target.dataset.target).getBoundingClientRect().top +
                window.scrollY - 20
        });
    });
}
