$(document).ready(() => {
    $('#mainContent').load('assets/pages/home.html');
    $('#home').addClass('disabled');
})

$('#home').click(() =>{
    removeDisabledClass();
    $('#mainContent').load('assets/pages/home.html');
    $('#home').addClass('disabled');
})

$('#about').click(() =>{
    removeDisabledClass();
    $('#mainContent').load('assets/pages/about.html');
    $('#about').addClass('disabled');
})


const removeDisabledClass = () => {
    $('#home').removeClass('disabled');
    $('#about').removeClass('disabled');
}