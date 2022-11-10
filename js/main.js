//recuperando elementos do HTML.
let searchBox = document.querySelector('input');
let images = document.querySelectorAll('.imagem');

//Evento no input
searchBox.oninput = () => {
    images.forEach(hide => hide.style.display = 'none'); 
    let value = searchBox.value.toLowerCase(); 

    images.forEach(filter => {
        let title = filter.getAttribute(`data-title`);
        if (value === title) {
            filter.style.display = 'block';
        }

        if (searchBox.value === '') {
            filter.style.display = 'block';
        }

    })
}