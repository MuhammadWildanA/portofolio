const nav = document.querySelector('#nav-ul')

const menuBtn = document.querySelector('#btn-menu').onclick = (e) => {
    nav.classList.toggle('active');
    e.preventDefault();
};

const mb = document.querySelector('#btn-menu')

document.addEventListener('click', function(e) {
    if (!mb.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
    }
});


