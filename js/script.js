/* toggle menu */

function toggleMenu(visible) {
    document.querySelector('.layout-row-bottom-left').classList.toggle('noshow-md', visible);
    document.querySelector('.layout-row-bottom-left').classList.toggle('noshow-sm', visible);
    document.querySelector('.layout-row-top-right').classList.toggle('noshow-sm', visible);
}

document.querySelector('.navigation__menu-button').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
});

/* toggle menu end */

document.querySelector('form#personal-data').addEventListener('submit', function(event) {
    var isFormValid = true;

    /* sprawdzenie adresu email i ewentualne pokolorwanie inputa */
    var emailAddressInput = event.target.querySelector('input[id="input-email"]');

    if(emailAddressInput.value.indexOf('@') < 0) {
        isFormValidate = false;
        emailAddressInput.parentElement.querySelector('.error').innerHTML = 'Błędny adres e-mail';
        emailAddressInput.classList.add('error');
    } else {
        emailAddressInput.parentElement.querySelector('.error').innerHTML = '';
        emailAddressInput.classList.remove('error');
    }

    event.cancel = true;
    return !isFormValid ? event.preventDefault() : true;
});
