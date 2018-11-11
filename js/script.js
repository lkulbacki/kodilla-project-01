/* toggle menu */

function toggleMenu(visible) {
    document.querySelector('.layout-row-bottom-left').classList.toggle('noshow-md', visible)
    document.querySelector('.layout-row-bottom-left').classList.toggle('noshow-sm', visible)
    document.querySelector('.layout-row-top-right').classList.toggle('noshow-sm', visible)
}

document.querySelector('.navigation__menu-button').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
});

/* toggle menu end */


/* toggle menu mobile */
// aim: on mobile when opening menu - hide all other elements

/* toggle menu mobile end*/