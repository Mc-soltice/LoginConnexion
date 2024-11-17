const byId = (id) => {
    return document.getElementById(id);
};

const $signUpButton = byId('signUp');
const $signInButton = byId('signIn');
const $container = byId('container');

// Lorsque le bouton Sign Up est cliqué
$signUpButton.addEventListener('click', () => {
    $container.classList.add('right-panel-active');
});

// Lorsque le bouton Sign In est cliqué
$signInButton.addEventListener('click', () => {
    $container.classList.remove('right-panel-active');
});

