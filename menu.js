function toggleMenu(event) {
    event.preventDefault()

    const menu = document.querySelector('.menu')
    const menuToggle = document.querySelector('.menu-toggle')

    if (menu.classList.contains('open')) {
        menu.classList.remove('')
    } else {
        menu.classList.add('open')
    }
}