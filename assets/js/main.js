document.querySelector('.menu_burger').addEventListener('click', function(e) {
    e.preventDefault()
    $('.menu_links').toggle()
})

$('.pages').click(function(e) {

    $('.page').toggle()
})