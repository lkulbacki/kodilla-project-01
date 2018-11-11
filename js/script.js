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

var personal_data_form = document.querySelector('form#personal-data');

// walidacja formularza personal data - email
if (typeof personal_data_form !== "undefined" && personal_data_form !== null) {
    personal_data_form.addEventListener('submit', function(event) {
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
}


// kontrola modali

var modal = document.getElementById('overlay');

// if any modal exists
if(typeof modal !== "undefined" && modal !== null) {
    // define function to close modals
    function closeModal() {
        document.getElementById('overlay').classList.remove('show');
    }

    document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModal();
        })
    });

    document.querySelector('#overlay').addEventListener('click', function(e) {
        if(e.target === this) {
            closeModal()
        }
    });

    document.addEventListener('keyup', function(e) {
        if(e.keyCode === 27) {
            closeModal()
        }
    });

    function openModal(modal) {
        document.querySelectorAll('#overlay > *').forEach(function(modal) {
            modal.classList.remove('show')
        });
        document.querySelector('#overlay').classList.add('show');
        document.querySelector(modal).classList.add('show');
    }

    var buttonAddLink = document.getElementsByClassName('btn-modal--add-link');
    if(typeof buttonAddLink !== "undefined" && buttonAddLink !== null) {

        Array.from(buttonAddLink).forEach(function(btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                openModal('#addLinkModal');
            });
        });
    }

};

