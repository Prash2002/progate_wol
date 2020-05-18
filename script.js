//text animation
$(document).ready(function() {

    var $element = $('.test');
    var newText = '         LEARN TODAY';

    bubbleText({
        element: $element,
        newText: newText,
        speed: 3000,
        repeat: Infinity,
    });

});

// menu bar slide down
const slideMenu = () => {
    const burger= document.querySelector('.burger')
    const links = document.querySelector('.nav')

    burger.addEventListener('click', () => {
        links.classList.toggle('link-active')
        console.log(links)

    })
}

slideMenu();