//add defult local storage
document.body.classList.add(localStorage.getItem('theme') || "red")

// variables
var el = document.querySelectorAll('.color-switcher li'),
    classeslist = [];

// Loop on element
for (let i = 0; i < el.length; i++) {
    //get clases list
    classeslist.push(el[i].getAttribute('data-color'));
    el[i].addEventListener('click', function () {
        //remove old classes
        document.body.classList.remove(...classeslist);
        //add classes to body
        document.body.classList.add(this.getAttribute('data-color'));
        //add data to local storage
        localStorage.setItem('theme', this.getAttribute('data-color'))
    }, false)
};