/* toggle menu */

function toggleMenu(visible) {
    document.querySelector('.layout-row-bottom-left').classList.toggle('noshow', visible)
}

document.querySelector('.navigation__menu-button').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
});

/* toggle menu end */
