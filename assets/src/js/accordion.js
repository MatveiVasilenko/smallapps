//Feature accordion

const [...bar] = document.querySelectorAll('.bar')
const [...body] = document.querySelectorAll('.bodyItem')

function changeItem (id) {
    body.map(function(elemBody, index) {
        elemBody.classList.remove('feature__body__item--active')
    })
    bar.map((elem, index) => {
        if (id == index) {
            elem.classList.add('feature__bar__item--active')
            body[id].classList.add('feature__body__item--active')
        }  
        else {
            elem.classList.remove('feature__bar__item--active')
        }

    })    
}


