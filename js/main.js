document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
    document.querySelector('body').classList.toggle('close');
})

document.querySelectorAll('.nav__list-link').forEach(link => {
    link.addEventListener('click', function () {
        this.classList.remove('active');
        document.querySelector('.nav').classList.remove('open');
        document.querySelector('body').classList.remove('close'); document.querySelector('.burger').classList.remove('active');
    })

})


