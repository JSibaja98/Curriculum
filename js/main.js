const btnSwitch = document.querySelector('#switch');
const sections = document.querySelector('#secDark');
const sections2 = document.querySelector('#secDark2');
const sections3 = document.querySelector('#secDark3');
const face2 = document.getElementsByClassName('contenedor__face2');
const cards = document.getElementsByClassName('works__card');
const footer = document.querySelector('footer');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    sections.classList.toggle('dark');
    sections2.classList.toggle('dark');
    footer.classList.toggle('dark');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('dark');
    }
    for (let i = 0; i < face2.length; i++) {
        face2[i].classList.toggle('dark');
    }
    sections3.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    // Guardamos la clase
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

//modo actual 
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    sections.classList.add('dark');
    sections2.classList.add('dark');
    footer.classList.add('dark');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.add('dark');
    }
    for (let i = 0; i < face2.length; i++) {
        face2[i].classList.add('dark');
    }
    sections3.classList.add('dark');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    sections.classList.remove('dark');
    sections2.classList.remove('dark');
    footer.classList.remove('dark');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('dark');
    }
    for (let i = 0; i < face2.length; i++) {
        face2[i].classList.remove('dark');
    }
    sections3.classList.remove('dark');
    btnSwitch.classList.remove('active');
}