const menu = document.querySelector('.menu')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')

openMenu.onclick = () => {
    menu.style.height = "100%"
}
closeMenu.onclick = () => {
    menu.style.height = "0%"
}